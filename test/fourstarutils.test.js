var utils = require('../fourstarutils');
var assert = require('assert');


describe("fourstarutils", function(){

    describe('getMaxValue ', function() {
        it('should return 0 when 3,[1,2,3],0,1 value  present', function() {
          assert.equal(utils.getMaxValue(3,[1,2,3],0,1), 0);
        });

        it('should return 1 when [1,2],[1,2,3],0,1value  present', function() {
            assert.equal(utils.getMaxValue([1,2],[1,2,3],0,1), 1);
          });
        
      });

      describe('getVallsCount ', function() {
        it('should return 0 when 1,0 value  present', function() {
          assert.equal(utils.getVallsCount(1,0), 0);
        });

        it('should return 1 when 0,0 value  present', function() {
            assert.equal(utils.getVallsCount(0,0), 1);
          });
        
      });
  

});