var utils= require('../sixstar');
var assert = require('assert');



describe("sixstar", function(){

    describe('alternatingCharacters ', function() {
        it('should return 3 when AAAA value  present', function() {
          assert.equal(utils.alternatingCharacters('AAAA'), 3);
        });

        it('should return 4 when BBBBB value  present', function() {
            assert.equal(utils.alternatingCharacters('BBBBB'), 4);
        });

        it('should return 0 when ABABABAB value  present', function() {
          assert.equal(utils.alternatingCharacters('ABABABAB'), 0);
        });

        it('should return 0 when BABABA value  present', function() {
            assert.equal(utils.alternatingCharacters('BABABA'), 0);
        });

        it('should return 4 when AAABBB value  present', function() {
            assert.equal(utils.alternatingCharacters('AAABBB'), 4);
        });
        
      });
  

});