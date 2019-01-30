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

      describe('superReducedString ', function() {
        it('should return abd when aaabccddd value  present', function() {
          assert.equal(utils.superReducedString('aaabccddd'), 'abd');
        });

        it('should return Empty String when aa value  present', function() {
            assert.equal(utils.superReducedString('aa'), 'Empty String');
        });

        it('should return Empty String when baab value  present', function() {
          assert.equal(utils.superReducedString('baab'), 'Empty String');
        });

        it('should return Empty String when mwkommokwmxjivkkvijxshscbbcshsgwdyqqydwgzpnlzzlnpzvfeaiiaefvyeqjccjqeymhqhiihqhmhaomkkmoahhddymmyddh value  present', function() {
            assert.equal(utils.superReducedString('mwkommokwmxjivkkvijxshscbbcshsgwdyqqydwgzpnlzzlnpzvfeaiiaefvyeqjccjqeymhqhiihqhmhaomkkmoahhddymmyddh'), 'Empty String');
        });

        it('should return acdqgacdqj when acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj value  present', function() {
            assert.equal(utils.superReducedString('acdqglrfkqyuqfjkxyqvnrtysfrzrmzlygfveulqfpdbhlqdqrrqdqlhbdpfqluevfgylzmrzrfsytrnvqyxkjfquyqkfrlacdqj'), 'acdqgacdqj');
        });
        
      });
  

     describe('stringConstruction ', function() {
        it('should return 4 when abcd value  present', function() {
          assert.equal(utils.stringConstruction('abcd'), 4);
        });
    });
    describe('isValid ', function() {
        it('should return NO when aabbcd value  present', function() {
          assert.equal(utils.isValid('aabbcd'), 'NO');
        });
        it('should return NO when aabbccddeefghi value  present', function() {
            assert.equal(utils.isValid('aabbccddeefghi'), 'NO');
        });
        it('should return YES when abcdefghhgfedecba value  present', function() {
            assert.equal(utils.isValid('abcdefghhgfedecba'), 'YES');
        });
        it('should return YES when aabbc value  present', function() {
            assert.equal(utils.isValid('aabbc'), 'YES');
        });

        it('should return YES when ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd value  present', function() {
            assert.equal(utils.isValid('ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd'), 'YES');
        });
    });

    describe('anagram ', function() {
        it('should return -1 when abc value  present', function() {
          assert.equal(utils.anagram('abc'), -1);
        });

        it('should return 3 when aaabbb value  present', function() {
            assert.equal(utils.anagram('aaabbb'), 3);
        });

        it('should return 1 when ab value  present', function() {
            assert.equal(utils.anagram('ab'), 1);
        });

        it('should return 2 when mnop value  present', function() {
            assert.equal(utils.anagram('mnop'), 2);
        });

        it('should return 0 when xyyx value  present', function() {
            assert.equal(utils.anagram('xyyx'), 0);
        });

        it('should return 1 when xaxbbbxx value  present', function() {
            assert.equal(utils.anagram('xaxbbbxx'), 1);
        });

        // it('should return 5 when fdhlvosfpafhalll value  present', function() {
        //     assert.equal(utils.anagram('fdhlvosfpafhalll'), 5);
        // });
    });
});