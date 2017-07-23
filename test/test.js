const chai = require('chai');
const should = chai.should();

const numberFactory = require("./../index");

describe("java-math", () => {
  it("should return a function", done => {
    (typeof numberFactory("one")).should.equals("function");
    (typeof numberFactory("one-hundred")).should.equals("function");
    (typeof numberFactory("forty-two")).should.equals("function");

    done();
  });

  it("should return a function which will return the corresponding number", done => {
    numberFactory("one")().should.equal(1);
    numberFactory("one-hundred")().should.equal(100);
    numberFactory("forty-two")().should.equal(42);

    done();
  });

  it("should correctly calculate the factorial of the number when it is called", done => {
    numberFactory("one").factorial().should.equal(1);
    numberFactory("five").factorial().should.equal(120);
    numberFactory("ten").factorial().should.equal(3628800);

    done();
  });

  it("should work with the plus operator", done => {
    const one = numberFactory("one");
    (one() + one()).should.equal(2);

    const five = numberFactory("five");
    (five() + five()).should.equal(10);

    done();
  });

  it("should work with the times operator", done => {
    const one = numberFactory("one");
    (one() * one()).should.equal(1);

    const five = numberFactory("five");
    (five() * five()).should.equal(25);

    done();
  });

  it("should work with the divide operator", done => {
    const two = numberFactory("two");
    (two() / two()).should.equal(1);

    const five = numberFactory("five");
    (five() / two()).should.equal(2.5);

    done();
  });
});