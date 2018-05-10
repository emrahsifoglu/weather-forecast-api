import * as chai from 'chai';
import * as supertest from 'supertest';

const api = supertest('http://localhost:3000');
const expect = chai.expect;
const should = chai.should();

describe('API Tests', () => {
    it('should return json response', (done) => {
        api.get('/api/hello/world')
            .expect('Content-Type', /json/)
            .expect({
                message: 'Hello World',
            })
            .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                done();
            });
    });
    it('should body should contain', (done) => {
        api.get('/api/hello/world')
            .end((err, res) => {
                res.body.should.contain({
                    message: 'Hello World',
                });
                done();
            });
    });
});
