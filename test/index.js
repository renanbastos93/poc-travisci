let chai = require('chai');
let expect = require('chai').expect;
let server = require('../app');
let chaiHttp = require('chai-http');

chai.use(chaiHttp);



describe("POC TRAVIS-CI TESTs API",()=>{
    before(function(){
        // console.log("Iniciando testes");
    });
    after(function(){
        // console.log("Finalizando testes");
        setTimeout(process.exit, 1500);
    });
    it("GET /", ()=>{
        chai.request(server)
        .get('/')
        .end((err, res) => {
            expect(res.text).to.be.an('string');
            expect(res).to.have.status(200);
        });
    });
    it("GET /api", ()=>{
        chai.request(server)
        .get('/api')
        .end((err, res) => {
            expect(res.body).to.be.an('object');
            expect(res.body).to.have.a.property('message');
            expect(res).to.have.status(200);
        });
    });
});