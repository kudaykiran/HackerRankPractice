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

    describe('squares ', function() {
      it('should return 0 results when this (17,24) value  present', function() {
        assert.equal(logic.squares(17,24), 0);
      });

      it('should return 1 results when this (17,26) value  present', function() {
        assert.equal(logic.squares(17,26), 1);
      });
      it('should return 3 results when this (3,17) value  present', function() {
        assert.equal(logic.squares(3,17), 3);
      });
      it('should return  results when this (4,4) value  present', function() {
        assert.equal(logic.squares(4,4), 1);
      });
    });

    describe('jumpingOnClouds ', function() {
      it('should return 0 results when this (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) value  present', function() {
        assert.equal(logic.jumpingOnClouds([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], 1), 52);
      });
    });

    describe('appendAndDelete ', function() {
      it('should return Yes results when this  value  present', function() {
        assert.equal(logic.appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv'
        ,'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv'
        ,100), 'Yes');
      });
    });

    describe('bigInteger ', function() {
      it('should return 15511210043330985984000000 results when this 25 value  present', function() {
        assert.equal(logic.bigInteger(25), '15511400000030985982100433');
      });
    });

    describe('permutationEquation ', function() {
      it('should return length 3 results when this 2, 3, 1 value  present', function() {
        assert.equal(logic.permutationEquation([ 2, 3, 1 ]).length, 3);
      });
    });

    describe('dayOfProgrammer ', function() {
      it('should return 13.09.1917 results when this 1927 value  present', function() {
        assert.equal(logic.dayOfProgrammer(1917), '13.09.1917');
      });
    });

    describe('catAndMouse ', function() {
      it('should return Mouse C results when this 1,3,2 value  present', function() {
        assert.equal(logic.catAndMouse(1 ,3 ,2), 'Mouse C');
      });
    });

    describe('saveThePrisoner ', function() {
      it('should return 3 results when this 5,2,1 value  present', function() {
        assert.equal(logic.saveThePrisoner(5,2,1), 3);
      });
    });

    describe('serviceLane ', function() {
      it('should return 5 results when this below value  present', function() {
        assert.equal(logic.serviceLane([ 2, 3, 1, 2, 3, 2, 3, 3 ] ,[ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ]).length, 5);
      });
    });

    describe('magicNumber ', function() {
      it('should return 18 results when this 6 ,1, 2,7, 2, 6,5 ,6 ,2 value  present', function() {
        assert.equal(logic.magicNumber([6 ,1, 2,7, 2, 6,5 ,6 ,2]), 18);
      });
    });

    describe('minimumDistances ', function() {
      it('should return -1 results when this 1, 2, 3, 4, 10 value  present', function() {
        assert.equal(logic.minimumDistances([1, 2, 3, 4, 10]), -1);
      });

      it('should return 3 results when this 7 ,1 ,3 ,4 ,1, 7 value  present', function() {
        assert.equal(logic.minimumDistances([7 ,1 ,3 ,4 ,1, 7]), 3);
      });
    });
    
    describe('timeInWords ', function() {
      it('should return five o\' clock  results when this 5 00 value  present', function() {
        assert.equal(logic.timeInWords(5, 00), 'five o\' clock');
      });

      it('should return one minute past five  results when this 5 01 value  present', function() {
        assert.equal(logic.timeInWords(5, 01), 'one minute past five');
      });

      it('should return nine minute past five  results when this 5 09 value  present', function() {
        assert.equal(logic.timeInWords(5, 09), 'nine minute past five');
      });

      it('should return nineteen minute past five  results when this 5 19 value  present', function() {
        assert.equal(logic.timeInWords(5, 19), 'nineteen minute past five');
      });

      it('should return quarter minute past five  results when this 5 15 value  present', function() {
        assert.equal(logic.timeInWords(5, 15), 'quarter past five');
      });

      it('should return twenty one minutes past five  results when this 5 21 value  present', function() {
        assert.equal(logic.timeInWords(5, 21), 'twenty one minutes past five');
      });

      it('should return half past five  results when this 5 30 value  present', function() {
        assert.equal(logic.timeInWords(5, 30), 'half past five');
      });

      it('should return twenty nine minutes to six  results when this 5 31 value  present', function() {
        assert.equal(logic.timeInWords(5, 31), 'twenty nine minutes to six');
      });

      it('should return nineteen minutes to six  results when this 5 31 value  present', function() {
        assert.equal(logic.timeInWords(5, 41), 'nineteen minutes to six');
      });

      it('should return three minutes to eleven  results when this 10 57 value  present', function() {
        assert.equal(logic.timeInWords(10, 57), 'three minutes to eleven');
      });
    });



  });