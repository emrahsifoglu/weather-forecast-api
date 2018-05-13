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

describe("Api get default route 'supertest' test cases", () => {
    it('should return json response', (done) => {
        api.get('/api/hello/world')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .expect({
                message: 'Hello World',
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
    it('should body contain json response', (done) => {
        api.get('/api/hello/world')
            .set('Content-Type', 'application/json')
            .expect('Content-Type', /json/)
            .end((err, res) => {
                res.body.should.contain({
                    message: 'Hello World',
                });
                done();
            });
    });
});

describe("Api get default route 'chai(http)' test cases", () => {
    it('should body contain json response', (done) => {
        chai.request(app).get('/api/hello/world')
            .then((res) => {
                res.body.should.contain({
                    message: 'Hello World',
                });
                expect(res.status).to.equal(200);
            })
            .then(() => { done(); })
            .catch((err) => { done(err); });
    });
});
