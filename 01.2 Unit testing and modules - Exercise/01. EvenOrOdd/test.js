const expect = require('chai').expect;
const isOddOrEven = require('./app');

describe('isOddOrEven', function(){
    it('should return undefined if param is not a string', function(){
        expect(isOddOrEven(3)).to.eql(undefined);
        expect(isOddOrEven([])).to.eql(undefined);
        expect(isOddOrEven({})).to.eql(undefined);

    });

    it('should return even if param length is even', function(){
        let param = isOddOrEven('aaaa');
        expect(param).to.eql('even');
    });

    it('should return odd if param length is odd', function(){
        let param = isOddOrEven('bbb');
        expect(param).to.eql('odd');
    });
});
