var logic= require("../logic");
var assert = require('assert');

describe('Array Try', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Logic file', function() {
    describe('jumpingOnCloudsEmma ', function() {
      it('should return 3 when ths [0, 0, 0, 1,0, 0] value  present', function() {
        assert.equal(logic.jumpingOnCloudsEmma([0, 0, 0, 1,0, 0]), 3);
      });
    });
  });