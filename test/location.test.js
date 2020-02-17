const chai = require("chai");
const chaiHttp = require("chai-http");
const expect = chai.expect;
chai.use(chaiHttp);
const supertest = require("supertest");
const agent = supertest.agent(require("../app"));

describe("GET location/{zip}", () => {
  it("Valid zipcode with default scale", done => {
    agent.get("/location/22043").end((err, res) => {
      if (err) return done(err);
      expect(res).to.have.status(200);
      expect(res.body).to.have.property("temperature");
      expect(res.body.temperature).to.have.a("number");
      expect(res.body).to.have.property("scale");
      expect(res.body.scale).to.equal("Fahrenheit");
      done();
    });
  });
  it("Valid zipcode with customize scale", done => {
    agent
      .get("/location/22043")
      .query({ scale: "Celsius" })
      .end((err, res) => {
        if (err) return done(err);
        expect(res).to.have.status(200);
        expect(res.body).to.have.property("temperature");
        expect(res.body.temperature).to.have.a("number");
        expect(res.body).to.have.property("scale");
        expect(res.body.scale).to.equal("Celsius");
        done();
      });
  });
  it("Invalid zipcode", done => {
    agent.get("/location/00000").end((err, res) => {
      if (err) return done(err);
      expect(res).to.have.status(404);
      expect(res.body).to.have.property("status");
      expect(res.body.status).to.equal(404);
      expect(res.body).to.have.property("message");
      expect(res.body.message).to.equal("City not found");
      done();
    });
  });
});
