var assert = require('assert');
var logic = require('../logic');

var fiveStar = require("../fivestar");
var fourstar = require("../fourstar");
var threestar = require("../threestar");

describe('Logic file', function() {
    describe('jumpingOnCloudsEmma ', function() {
      it('should return 3 when ths [0, 0, 0, 1,0, 0] value  present', function() {
        assert.equal(fiveStar.jumpingOnCloudsEmma([0, 0, 0, 1,0, 0]), 3);
      });
      it('should return 2 when ths [0, 1, 0, 1,1, 0] value  present', function() {
        assert.equal(fiveStar.jumpingOnCloudsEmma([0, 1, 0, 1,1, 0]), 2);
      });
      it('should return 2 when ths [0, 1, 1, 0 , 1, 0] value  present', function() {
        assert.equal(fiveStar.jumpingOnCloudsEmma([0, 1, 1, 0, 1, 0]), 2);
      });
    });

    describe('funnyString ', function() {
      it('should return Funny when ths acxz value  present', function() {
        assert.equal(fiveStar.funnyString('acxz'), 'Funny');
      });
      it('should return Not Funny when ths bcxz value  present', function() {
        assert.equal(fiveStar.funnyString('bcxz'), 'Not Funny');
      });
      it('should return Not Funny when ths ivvkxq value  present', function() {
        assert.equal(fiveStar.funnyString('ivvkxq'), 'Not Funny');
      });
      it('should return Not Funny when ths ivvkx value  present', function() {
        assert.equal(fiveStar.funnyString('ivvkx'), 'Not Funny');
      });

    });

    describe('cutTheSticks ', function() {
      it('should return 4 results when ths [1, 2, 3, 4, 3, 3, 2, 1] value  present', function() {
        assert.equal(logic.cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]).length, 4);
      });
      it('should return 4 results when ths [5, 4, 4, 2, 2, 8] value  present', function() {
        assert.equal(logic.cutTheSticks([5, 4, 4, 2, 2, 8]).length, 4);
      });
    });

    describe('libraryFine ', function() {
      it('should return 45 results when this 9,6,2015,6,6,2015 value  present', function() {
        assert.equal(logic.libraryFine(9,6,2015,6,6,2015), 45);
      });

      it('should return 500 results when this 9,6,2015,6,6,2015 value  present', function() {
        assert.equal(logic.libraryFine(9,7,2015,6,6,2015), 500);
      });

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
      it('should return 52 results when this (1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1) value  present', function() {
        assert.equal(fiveStar.jumpingOnClouds([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], 1), 52);
      });
      it('should return 92 results when this [ 0 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ], 2 value  present', function() {
        assert.equal(fiveStar.jumpingOnClouds([ 0 ,0 ,1 ,0 ,0 ,1 ,1 ,0 ], 2), 92);
      });
      it('should return 94 results when this [ 0 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ], 2 value  present', function() {
        assert.equal(fiveStar.jumpingOnClouds([ 0 ,1 ,0 ,1 ,0 ,1 ,1 ,0 ], 2), 94);
      });
    });

    describe('appendAndDelete ', function() {
      it('should return No results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('ashley','ash'
        ,2), 'No');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('aba'
        ,'aba'
        ,7), 'Yes');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('hackerhappy'
        ,'hackerrank'
        ,7), 'Yes');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('aaaaaaaaaa','aaaaa',7), 'Yes');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('zzzzz','zzzzzzz',4), 'Yes');
      });

      it('should return No results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('qwerasdf','qwerbsdf',6), 'No');
      });

      it('should return No results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('y','yu',2), 'No');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('qwerty','zxcvbn',100), 'Yes');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('abcdef','fedcba',15), 'Yes');
      });

      it('should return No results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('abcd','abcdert',10), 'No');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('aaa','a',10), 'Yes');
      });

      it('should return Yes results when this  value  present', function() {
        assert.equal(fourstar.appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv'
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

      it('should return length 5 results when this 4 3 5 1 2 value  present', function() {
        assert.equal(logic.permutationEquation([ 4, 3, 5, 1, 2]).length, 5);
      });
    });

    describe('climbingLeaderboard ', function() {
      it('should return length 4 results when this [100, 100, 50, 40, 40, 20, 10],[5 ,25 ,50, 120] value  present', function() {
        assert.equal(logic.climbingLeaderboard([100, 100, 50, 40, 40, 20, 10],[5 ,25 ,50, 120]).length, 4);
      });

      it('should return length 5 results when this [100 ,90 ,90 ,80 ,75 ,60],[50, 65, 77, 90, 102] value  present', function() {
        assert.equal(logic.climbingLeaderboard([100 ,90 ,90 ,80 ,75 ,60],[50, 65, 77, 90, 102]).length, 5);
      });
    });

    describe('circularArrayRotation ', function() {
      it('should return length 3 results when this [ 1, 2, 3,4,5,6,7,8,9,10 ] ,18, [ 0, 1, 2 ] value  present', function() {
        assert.equal(logic.circularArrayRotation([ 1, 2, 3,4,5,6,7,8,9,10 ] ,18, [ 0, 1, 2 ]).length, 3);
      });

      it('should return length 3 results when this [ 1, 2, 3] ,2, [ 0, 1, 2 ] value  present', function() {
        assert.equal(logic.circularArrayRotation([ 1, 2, 3 ] ,2, [ 0, 1, 2 ]).length, 3);
      });
    });

    
    describe('dayOfProgrammer ', function() {
      it('should return 13.09.1917 results when this 1927 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1917), '13.09.1917');
      });
      it('should return 13.09.2017 results when this 2017 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(2017), '13.09.2017');
      });
      it('should return 12.09.2016 results when this 2016 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(2016), '12.09.2016');
      });
      it('should return 12.09.1800 results when this 1800 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1800), '12.09.1800');
      });

      it('should return 12.09.1800 results when this 1699 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1699), '12.09.1699');
      });

      it('should return 12.09.1800 results when this 2000 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(2000), '12.09.2000');
      });

      it('should return 12.09.1700 results when this 2000 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1700), '12.09.1700');
      });

      it('should return 13.09.1919 results when this 1919 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1919), '13.09.1919');
      });

      it('should return 26.09.1918 results when this 1918 value  present', function() {
        assert.equal(threestar.dayOfProgrammer(1918), '26.09.1918');
      });
    });

    describe('catAndMouse ', function() {
      it('should return Mouse C results when this 1,3,2 value  present', function() {
        assert.equal(fourstar.catAndMouse(1 ,3 ,2), 'Mouse C');
      });
      it('should return Cat B results when this 1,2,3 value  present', function() {
        assert.equal(fourstar.catAndMouse(1 ,2 ,3), 'Cat B');
      });
    });

    describe('sockMerchant ', function() {
      it('should return 3 results when this 10, 20, 20, 10, 10, 30, 50, 10, 20 value  present', function() {
        assert.equal(threestar.sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20]), 3);
      });

      it('should return 4 results when this 1, 1, 3, 1, 2, 1, 3, 3, 3, 3 value  present', function() {
        assert.equal(threestar.sockMerchant([1, 1, 3, 1, 2, 1, 3, 3, 3, 3]), 4);
      });
    });

    describe('birdsProblem ', function() {
      it('should return 4 results when this 1 4 4 4 5 3 value  present', function() {
        assert.equal(threestar.birdsProblem('1 4 4 4 5 3'),4);
      });

      it('should return 3 results when this 1 2 3 4 5 4 3 2 1 3 4 value  present', function() {
        assert.equal(threestar.birdsProblem('1 2 3 4 5 4 3 2 1 3 4'), 3);
      });
    });

    describe('countingValleys ', function() {
      it('should return 1 results when this UDDDUDUU value  present', function() {
        assert.equal(fourstar.countingValleys('UDDDUDUU'), 1);
      });
      it('should return 0 results when this UDDDDDUU value  present', function() {
        assert.equal(fourstar.countingValleys('UDDDDDUU'), 0);
      });
      it('should return 0 results when this UDDD value  present', function() {
        assert.equal(fourstar.countingValleys('UDDD'), 0);
      });
    });

    describe('pageCount ', function() {
      it('should return 1 results when this 6,2 value  present', function() {
        assert.equal(fourstar.pageCount(6,2), 1);
      });
      it('should return 0 results when this 5,4value  present', function() {
        assert.equal(fourstar.pageCount(5,4), 0);
      });
      it('should return 0 results when this 4,4 value  present', function() {
        assert.equal(fourstar.pageCount(4,4), 0);
      });
      it('should return 0 results when this 5,1 value  present', function() {
        assert.equal(fourstar.pageCount(5,1), 0);
      });
      it('should return 1 results when this 7,3 value  present', function() {
        assert.equal(fourstar.pageCount(7,3), 1);
      });
      it('should return 1 results when this 6,5 value  present', function() {
        assert.equal(fourstar.pageCount(6,5), 1);
      });
      it('should return 1 results when this 7,4 value  present', function() {
        assert.equal(fourstar.pageCount(7,4), 1);
      });
      it('should return 1 results when this 6,4 value  present', function() {
        assert.equal(fourstar.pageCount(6,4), 1);
      });

      it('should return 3810 results when this 37455,29835 value  present', function() {
        assert.equal(fourstar.pageCount(37455,29835), 3810);
      });

      it('should return 8720 results when this 95073,17440 value  present', function() {
        assert.equal(fourstar.pageCount(95073,17440), 8720);
      });
    });

    describe('viralAdvertising ', function() {
      it('should return 9 results when this 3 value  present', function() {
        assert.equal(fourstar.viralAdvertising(3), 9);
      });
    });

    describe('getMoneySpent ', function() {
      it('should return -1 results when this 5,1,1,4,5 value  present', function() {
        assert.equal(fourstar.getMoneySpent([5,1,1],
          4,
          5 ), -1);
      });

    });

    describe('utopianTree ', function() {
      it('should return 1 results when this 0 value  present', function() {
        assert.equal(fourstar.utopianTree(0), 1);
      });
      it('should return 2 results when this 1 value  present', function() {
        assert.equal(fourstar.utopianTree(1), 2);
      });
      it('should return 7 results when this 4 value  present', function() {
        assert.equal(fourstar.utopianTree(4), 7);
      });
    });

    describe('saveThePrisoner ', function() {
      it('should return 2 results when this 5,2,1 value  present', function() {
        assert.equal(fourstar.saveThePrisoner(5,2,1), 2);
      });

      it('should return 3 results when this 5,2,2 value  present', function() {
        assert.equal(fourstar.saveThePrisoner(5,2,2), 3);
      });

      it('should return 3 results when this 3,7,3 value  present', function() {
        assert.equal(fourstar.saveThePrisoner(3,7,3), 3);
      });

      it('should return 6 results when this 7,19,2 value  present', function() {
        assert.equal(fourstar.saveThePrisoner(7,19,2), 6);
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
        assert.equal(fiveStar.minimumDistances([1, 2, 3, 4, 10]), -1);
      });

      it('should return 3 results when this 7 ,1 ,3 ,4 ,1, 7 value  present', function() {
        assert.equal(fiveStar.minimumDistances([7 ,1 ,3 ,4 ,1, 7]), 3);
      });
    });
    
    describe('timeInWords ', function() {
      it('should return five o\' clock  results when this 5 00 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 00), 'five o\' clock');
      });

      it('should return one minute past five  results when this 5 01 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 01), 'one minute past five');
      });

      it('should return nine minute past five  results when this 5 09 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 09), 'nine minute past five');
      });

      it('should return nineteen minute past five  results when this 5 19 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 19), 'nineteen minute past five');
      });

      it('should return quarter minute past five  results when this 5 15 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 15), 'quarter past five');
      });

      it('should return twenty one minutes past five  results when this 5 21 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 21), 'twenty one minutes past five');
      });

      it('should return half past five  results when this 5 30 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 30), 'half past five');
      });

      it('should return twenty nine minutes to six  results when this 5 31 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 31), 'twenty nine minutes to six');
      });

      it('should return nineteen minutes to six  results when this 5 31 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 41), 'nineteen minutes to six');
      });

      it('should return quarter to six  results when this 5 45 value  present', function() {
        assert.equal(fiveStar.timeInWords(5, 45), 'quarter to six');
      });

      it('should return three minutes to eleven  results when this 10 57 value  present', function() {
        assert.equal(fiveStar.timeInWords(10, 57), 'three minutes to eleven');
      });
    });

    describe('camelcase ', function() {
      it('should return 2 results when this aBc value  present', function() {
        assert.equal(logic.camelcase('aBc'), 2);
      });
      it('should return 1 results when this abc value  present', function() {
        assert.equal(logic.camelcase('abc'), 1);
      });
    });

    describe('marsExploration ', function() {
      it('should return 20 results when this OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS value  present', function() {
        assert.equal(fiveStar.marsExploration('OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS'), 20);
      });
      it('should return 12 results when this SOSOOSOSOSOSOSSOSOSOSOSOSOS value  present', function() {
        assert.equal(fiveStar.marsExploration('SOSOOSOSOSOSOSSOSOSOSOSOSOS'), 12);
      });
      it('should return 26 results when this SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO value  present', function() {
        assert.equal(fiveStar.marsExploration('SSSSSSSSSSSSSSSOOOOOOOOOOOOOOOOOOOOOOOOOSSSSSSSO'), 26);
      });
      it('should return 14 results when this SOSSOSSSSOSOIEISOSPOISOSIUSISO value  present', function() {
        assert.equal(fiveStar.marsExploration('SOSSOSSSSOSOIEISOSPOISOSIUSISO'), 14);
      });
      it('should return 67 results when this SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS value  present', function() {
        assert.equal(fiveStar.marsExploration('SOSOSOSOSDSDSKWOSDOSDOASDOASDFAFJDFDOSOSOWNSOSOSNDSKDDOSOSOSJDSDSOOSOSDSDOSASSOASDSAOSOSODSDSOASDWS'), 67);
      });
      
    });

    describe('hackerrankInString ', function() {
      it('should return YES results when this hereiamstackerrank value  present', function() {
        assert.equal(fiveStar.hackerrankInString('hereiamstackerrank'), 'YES');
      });
      it('should return NO results when this hackerworld value  present', function() {
        assert.equal(fiveStar.hackerrankInString('hackerworld'), 'NO');
      });
      it('should return YES results when this hhaacckkekraraannk value  present', function() {
        assert.equal(fiveStar.hackerrankInString('hhaacckkekraraannk'), 'YES');
      });
      it('should return NO results when this rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt value  present', function() {
        assert.equal(fiveStar.hackerrankInString('rhbaasdndfsdskgbfefdbrsdfhuyatrjtcrtyytktjjt'), 'NO');
      });

      it('should return NO results when this Rhackerank  value  present', function() {
        assert.equal(fiveStar.hackerrankInString('Rhackerank'), 'NO');
      });
      
    });

    describe('pangrams ', function() {
      it('should return pangram results when this qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun value  present', function() {
        assert.equal(fiveStar.pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun'), 'pangram');
      });
      it('should return not pangram results when this qmExzBIJmdELxyOFWv LOCmefk value  present', function() {
        assert.equal(fiveStar.pangrams('qmExzBIJmdELxyOFWv LOCmefk'), 'not pangram');
      });
      
      
    });

    describe('gemstones ', function() {
      it('should return 2 results when this abcdde,baccd,eeabg value  present', function() {
        assert.equal(fourstar.gemstones(['abcdde','baccd','eeabg']), 2);
      });
      it('should return 1 results when this aacdde,aaccd,eeaag value  present', function() {
        assert.equal(fourstar.gemstones(['aacdde','aaccd','eeaag']), 1);
      });
      
      
    });
    
  });
