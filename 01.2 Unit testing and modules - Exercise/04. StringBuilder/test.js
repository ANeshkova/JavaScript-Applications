const expect = require('chai').expect;
const StringBuilder = require('./StringBuilder');

describe('StringBuilder', function () {

    let result;
    let builder;

    beforeEach(() => {
        result = null;
        builder = new StringBuilder;
    })
    describe('constructor', function () {

        it('works with valid string param', function () {
            result = new StringBuilder('one')._stringArray;
            expect(result).to.eql(['o', 'n', 'e']);
        });

        it('works with invalid string param', function () {
            result = () => new StringBuilder(true);
            expect(result).to.Throw('Argument must be string');
        });
    });

    describe('append', function(){
        
        it('append with valid string param', function(){
            builder.append('abc');
            result = builder._stringArray;
            expect(result).to.eql(['a', 'b', 'c']);
        });

        it('append with invalid string param', function () {
            result = () => builder.append(false);
            expect(result).to.Throw('Argument must be string');
        });
    });

    describe('remove', function(){
        it('remove with valid string param', function(){
            builder = new StringBuilder('abcde');
            builder.remove(0, 2);
            result = builder._stringArray;
            expect(result).to.eql(['c', 'd', 'e']);
        });
    });

    describe('prepend', function(){
        it('prepend with valid string param', function(){
            builder = new StringBuilder('abc');
            builder.prepend('de');
            result = builder._stringArray;
            expect(result).to.eql(['d', 'e', 'a', 'b', 'c']);
        });

        it('prepend with invalid string param', function () {
            result = () => builder.prepend(false);
            expect(result).to.Throw('Argument must be string');
        });
    });

    describe('insertAt', function(){

        it('insertAt with valid string param', function(){
            builder = new StringBuilder('abc');
            builder.insertAt('d', 1);
            result = builder._stringArray;
            expect(result).to.eql(['a', 'd', 'b', 'c']);
        });

        it('insertAt with invalid string param', function () {
            result = () => builder.insertAt(false);
            expect(result).to.Throw('Argument must be string');
        });
    });

    describe('toString', function(){

        it('with empty array', function(){
            result = builder.toString();
            expect(result).to.eql('');
        });
        
        it('with not empty array', function(){
            builder = new StringBuilder('abcd');
            result = builder.toString();
            expect(result).to.eql('abcd');
        });
    });

    describe('Type of StringBuilder', function () {
        it('StringBuilder exist', function () {
            expect(StringBuilder).to.exist
        });

        it('StringBuilder type', function () {
            expect(typeof StringBuilder).to.equal('function');
        });

        // Test 10 Judge
        it('should have the correct function properties', function () {
            assert.isFunction(StringBuilder.prototype.append);
            assert.isFunction(StringBuilder.prototype.prepend);
            assert.isFunction(StringBuilder.prototype.insertAt);
            assert.isFunction(StringBuilder.prototype.remove);
            assert.isFunction(StringBuilder.prototype.toString);
        });

        // Test 5 Judge
        it('full test', function () {
            let str = new StringBuilder('hello');
            str.append(', there');
            str.prepend('User, ');
            str.insertAt('woop', 5);
            str.remove(6, 3);
            expect(str.toString()).to.equal('User,w hello, there');
        });
    });
});
