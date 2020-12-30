const expect = require('chai').expect;
const mathEnforcer = require('./app');

describe('mathEnforcer', function(){

    describe('addFive', function(){
        it('should return undefined if param is not a number', function(){
            expect(mathEnforcer.addFive('abc')).to.eql(undefined);
            expect(mathEnforcer.addFive([])).to.eql(undefined);
            expect(mathEnforcer.addFive({})).to.eql(undefined);
        });

        it('should return param + 5 if param is a number', function(){
            expect(mathEnforcer.addFive(5)).to.eql(10);
        });

        it('should return valid result with negative number', function(){
            expect(mathEnforcer.addFive(-10)).to.eql(-5);
        });

        it('should return valid result with positive floating point number', function(){
            expect(mathEnforcer.addFive(5.5)).to.eql(10.5);
        });

        it('should return valid result with negative floating point number', function(){
            expect(mathEnforcer.addFive(-10.5)).to.eql(-5.5);
        });
    });

    describe('subtractTen', function(){
        it('should return undefined if param is not a number', function(){
            expect(mathEnforcer.subtractTen('abc')).to.eql(undefined);
            expect(mathEnforcer.subtractTen([])).to.eql(undefined);
            expect(mathEnforcer.subtractTen({})).to.eql(undefined);
        });

        it('should return param - 10 if param is a number', function(){
            expect(mathEnforcer.subtractTen(11)).to.eql(1);
        });

        it('should return valid result with negative number', function(){
            expect(mathEnforcer.subtractTen(-10)).to.eql(-20);
        });

        it('should return valid result with positive floating point number', function(){
            expect(mathEnforcer.subtractTen(15.5)).to.eql(5.5);
        });

        it('should return valid result with negative floating point number', function(){
            expect(mathEnforcer.subtractTen(-15.5)).to.eql(-25.5);
        });
    });

    describe('sum', function(){
        it('should return undefined if first param is not a number', function(){
            expect(mathEnforcer.sum('abc', 1)).to.eql(undefined);
            expect(mathEnforcer.sum([], 1)).to.eql(undefined);
            expect(mathEnforcer.sum({}, 1)).to.eql(undefined);
        });

        it('should return undefined if second param is not a number', function(){
            expect(mathEnforcer.sum(1, 'abc')).to.eql(undefined);
            expect(mathEnforcer.sum(1, [])).to.eql(undefined);
            expect(mathEnforcer.sum(1, {})).to.eql(undefined);
        });

        it('should return valid result with positive params', function(){
            expect(mathEnforcer.sum(3, 5)).to.eql(8);
        });

        it('should return valid result with negative params', function(){
            expect(mathEnforcer.sum(-3, -5)).to.eql(-8);
        });

        it('should return valid result with negative first param', function(){
            expect(mathEnforcer.sum(-10, 5)).to.eql(-5);
        });

        it('should return valid result with negative second param', function(){
            expect(mathEnforcer.sum(5, -10)).to.eql(-5);
        });

        it('should return valid result with positive floating point first param', function(){
            expect(mathEnforcer.sum(5.5, 5)).to.eql(10.5);
        });

        it('should return valid result with positive floating point second param', function(){
            expect(mathEnforcer.sum(5, 5.5)).to.eql(10.5);
        });

        it('should return valid result with negative floating point first param', function(){
            expect(mathEnforcer.sum(-10.5, 5)).to.eql(-5.5);
        });

        it('should return valid result with negative floating point second param', function(){
            expect(mathEnforcer.sum(5, -10.5)).to.eql(-5.5);
        });

        it('should return valid result with positive floating point params', function(){
            expect(mathEnforcer.sum(3.5, 5.5)).to.eql(9);
        });

        it('should return valid result with negative floating point params', function(){
            expect(mathEnforcer.sum(-3.5, -5.5)).to.eql(-9);
        });
    });
});
