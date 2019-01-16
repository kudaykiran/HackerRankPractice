var http = require("http");
var logic= require("./logic");

// Make sure we got a filename on the command line.
// if (process.argv.length < 3) {
//     console.log('Usage: node ' + process.argv[1] + ' FILENAME');
//     process.exit(1);
//   }
  // Read the file and print its contents.
  var fs = require('fs')
    , filename = 't1.txt';


  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    console.log('OK: ' + filename);

    // c,onsole.log(logic(data));
    // console.log(logic.dayOfProgrammer(1917));
    // console.log(logic.sockMerchant(JSON.parse("[" + data.split(' ').join(',') + "]")));
    // var twoDatas =  data.split('2nd');
    // console.log(logic.getMoneySpent(374625
    //           , JSON.parse("[" + twoDatas[0].split(' ').join(',') + "]")
    //           , JSON.parse("[" + twoDatas[1].split(' ').join(',') + "]")));

    // console.log(logic.catAndMouse(1 ,3 ,2));

    // [0,1,2,3,4].map(x => console.log(logic.utopianTree(x)));

    // console.log(logic.viralAdvertising(4));
    // console.log(logic.saveThePrisoner(5,2,1))
    // console.log(logic.serviceLane([ 2, 3, 1, 2, 3, 2, 3, 3 ] ,[ [ 0, 3 ], [ 4, 6 ], [ 6, 7 ], [ 3, 5 ], [ 0, 7 ] ]));

    // console.log(logic.magicNumber([6 ,1, 2,7, 2, 6,5 ,6 ,2]));
    // var threeDatas =  data.split('\r\n');
    // var set1 = threeDatas[0].split(' ');
    

    // console.log( k);

    // var set2 = threeDatas[1]
    // var set3 = JSON.parse("[" + threeDatas[2].split('\n').join(',')+ "]");

    // // console.log(logic.climbingLeaderboard(set1,set2));

    // console.log(logic.climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120]));

    // console.log(logic.recursion());

    // console.log(logic.circularArrayRotation([ 1, 2, 3,4,5,6,7,8,9,10 ] ,18, [ 0, 1, 2 ]));
    // console.log(logic.permutationEquation([ 2, 3, 1 ]));

    // console.log(logic.bigInteger(25));

    // console.log(logic.jumpingOnClouds([ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 ], 1));

    // console.log(logic.appendAndDelete('asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv'
    // ,'asdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcvasdfqwertyuighjkzxcv'
    // ,100));

    // console.log(logic.squares(17,24));

    // console.log(logic.libraryFine(1,6,2018,31,8,2017));
    // console.log(logic.cutTheSticks([1, 2, 3, 4, 3, 3, 2, 1]));

    // console.log(logic.nonDivisibleSubset(7,[278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));
    // console.log(logic.jumpingOnCloudsEmma([0, 0, 0, 1,0, 0]));
    // console.log(logic.minimumDistances([1, 2, 3, 4, 10]));

    // console.log(logic.funnyString('acxz'));
    // console.log(logic.nonDivisibleSubset(7, [278, 576, 496, 727, 410, 124, 338, 149, 209, 702, 282, 718, 771, 575, 436]));

    // console.log(logic.timeInWords(7, 29));

    // console.log(logic.camelcase('aBc'));

    // console.log(logic.marsExploration('OOSDSSOSOSWEWSOSOSOSOSOSOSSSSOSOSOSS'));

    // console.log(logic.hackerrankInString('Rhackerank'));
    console.log(logic.pangrams('qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun'));


  });

 

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('Hello World\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
