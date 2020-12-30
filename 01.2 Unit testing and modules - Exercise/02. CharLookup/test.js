const expect = require('chai').expect;
const lookupChar = require('./app');

describe('lookupChar', function(){
    it('should return undefined if first param is not a string', function(){
        expect(lookupChar(3, 3)).to.eql(undefined);
        expect(lookupChar([], 3)).to.eql(undefined);
        expect(lookupChar({}, 3)).to.eql(undefined);
    });

    it('should return undefined if second param is not an integer number', function(){
        expect(lookupChar('abc', 'abc')).to.eql(undefined);
        expect(lookupChar('abc', 1.5)).to.eql(undefined);
        expect(lookupChar('abc', [])).to.eql(undefined);
    });

    it('should return "Incorrect index" if second param is invalid index', function(){
        expect(lookupChar('abc', -1)).to.eql("Incorrect index");
        expect(lookupChar('abc', 3)).to.eql("Incorrect index");
        expect(lookupChar('abc', 4)).to.eql("Incorrect index");
    });

    it('should return correct value with correct params', function(){
        expect(lookupChar('abc', 2)).to.eql('c');
        expect(lookupChar('abc', 0)).to.eql('a');
    });
});
