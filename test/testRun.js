let assert = require('assert');
const runner = require('../service/runner')

describe('fizzbuzz->Check whether the run method behaves correctly when providing wrong arguments', function () {
    describe('#run([])', function () {
        it('should throw an exception if no range is provided', function () {
            assert.throws(() => { runner.run([]) }, (err) => { return err.message.includes('Invalid arguments passed') });
        });
    });
    describe('#run([\'a\', \'b\', \'c\', \'d\'])', function () {
        it('should throw an exception if no valid range is provided', function () {
            assert.throws(() => { runner.run(['a', 'b', 'c', 'd']) }, (err) => { return err.message.includes('Invalid numbers passed') });
        });
    });
    describe('#run([\'a\', \'b\', 2, 10])', function () {
        it('does not throw an exception if a valid range is provided', function () {
            assert.doesNotThrow(() => { runner.run(['a', 'b', 2, 10]) });
        });
    });
})