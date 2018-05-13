import * as chai from 'chai';
import chaiHttp = require('chai-http');
import * as express from 'express';
import * as supertest from 'supertest';
import { App } from '../src/App';

const api = supertest('http://localhost:3000');
const expect = chai.expect;
const should = chai.should();

chai.use(chaiHttp);

const app: express.Application = new App().app;

const mochaAsync = (fn) => {
    return (done) => {
        fn.call().then(done, (err) => {
            done(err);
        });
    };
};

describe("Api get weather route 'supertest' test cases", () => {
    it('should return bad request', (done) => {
        api.get('/api/weather')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                res.body.should.contain(Object({}));
                expect(res.status).to.equal(400);
                done();
            });
    });
    it('should return success', (done) => {
        api.get('/api/weather?lat=53.3478&lon=6.2597')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                res.body.should.contain(Object({}));
                expect(res.status).to.equal(200);
                done();
            });
    });
});

describe("Api get weather route 'chai(http)' test cases", () => {
    it('should return bad request', mochaAsync(async () => {
        const res = await chai.request(app)
            .get('/api/weather')
            .set('Content-Type', 'application/json');
        res.body.should.contain(Object({}));
        expect(res.status).to.equal(400);
    }));

    it('should return success', mochaAsync(async () => {
        const res = await chai.request(app)
            .get('/api/weather?lat=53.3478&lon=6.2597')
            .set('Content-Type', 'application/json');
        res.body.should.contain(Object({}));
        expect(res.status).to.equal(200);
    }));
});
