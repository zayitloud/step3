let assert = require('assert');
const runner = require('../service/runner')

describe('fizzbuzz->Check whether the run method behaves correctly when providing wrong arguments', function () {
    describe('#run([])', function () {
        it('should throw an exception if no range is provided', function () {
            assert.throws(() => { runner.run([]) }, (err) => { return err.message.includes('Invalid arguments passed') });
        });
    });
    describe('#run([ \'c\', \'d\'])', function () {
        it('should throw an exception if no valid range is provided', function () {
            assert.throws(() => { runner.run(['c', 'd']) }, (err) => { return err.message.includes('Invalid numbers passed') });
        });
    });
    describe('#run([ -1, -7])', function () {
        it('should throw an exception if no valid range is provided', function () {
            assert.throws(() => { runner.run([-1, -7]) }, (err) => { return err.message.includes('Invalid range passed') });
        });
    });
    describe('#run([ 2, 10])', function () {
        it('does not throw an exception if a valid range is provided', function () {
            assert.doesNotThrow(() => { runner.run([2, 10]) });
        });
    });
})