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

    describe('cutTheSticks ', function() {
      it('should return 4 results when ths [1, 2, 3, 4, 3, 3, 2, 1] value  present', function() {
        assert.equal(logic.cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]).length, 4);
      });
    });

    describe('libraryFine ', function() {
      it('should return 10000 results when this (1,6,2018,31,8,2017) value  present', function() {
        assert.equal(logic.libraryFine(1,6,2018,31,8,2017), 10000);
      });
    });
  });