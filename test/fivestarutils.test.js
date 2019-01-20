var utils= require('../fivestar.utils');
var assert = require('assert');



describe("fivestarutils", function(){

    describe('marsExplorationutils ', function() {
        it('should return 2 when SOSTOS,1 value  present', function() {
          assert.equal(utils.marsExplorationutils('SOSTOS',1), 2);
        });

        it('should return 1 when SOSSOS,1 value  present', function() {
            assert.equal(utils.marsExplorationutils('SOSSOS',1), 1);
          });
        
      });
  

});