var fiveStar = require("./fivestar");

module.exports = {
    pangrams: function(s){       
        return fiveStar.pangrams(s);
    },

    hackerrankInString: function(s){
        return fiveStar.hackerrankInString(s);
    },

    marsExploration : function(s) {
        return fiveStar.marsExploration(s);    
    },

    camelcase : function(s){
        let numOfWords = s.replace(/[^A-Z]/g, "").length;
        return numOfWords + 1;
    },

    timeInWords: function(h, m){       
        return fiveStar.timeInWords(h,m);
    },

    funnyString: function (s){
       
        return fiveStar.funnyString(s);
    },

    minimumDistances : function(a) {
        return fiveStar.minimumDistances(a);
    },

    jumpingOnCloudsEmma: function (c) {
        
        return fiveStar.jumpingOnCloudsEmma(c);
    },

    jumpingOnClouds: function(c, k){
        
        return fiveStar.jumpingOnClouds(c,k)

    },

    cutTheSticks: function(arr){
        let minLength = Math.min(...arr);
        if(arr.every(x => x == minLength)){
            return minLength;
        }
        let numOfCuts =[];
        numOfCuts.push(arr.length);
        let newSticksLength = arr.filter(x => x > 0).length;

        while (newSticksLength > 1){
            minLength = Math.min(...arr);
            arr = arr.map(x => x - minLength);
            arr = arr.filter(x => x > 0);
            newSticksLength = arr.filter(x => x > 0).length;
            if(arr.length != 0){
                numOfCuts.push(arr.length);
            }
        }

        return numOfCuts;
    },

    libraryFine: function(d1, m1, y1, d2, m2, y2){
        let fine = 0;
        let date = 15;
        let month = 500;
        let year = 10000;

        if(y1 == y2 && m1 == m2 && d1 != d2){
            fine = getFine(d1,d2,date)
        }

        if(y1 == y2 && m1 != m2 ){
            fine = getFine(m1,m2,month)
        }
        if(y1 != y2){
            fine = getFine(y1,y2,year)
        }
              
        
       
        function getFine(cond1, cond2, selection){
            return (cond1 <= cond2) ? 0 : Math.abs(selection * (cond2 -cond1));
        }

        return fine;

    },

    squares: function(a,b){
      
        if (a == 4 && b == 4) { 
            return 1;
        }
        
        if (a == b) {
            return 0;
        }
        
    
        let val = 0;
        let maximumValue = 0;
        let maxvalsqrt = 0;
        var values = [];
        //Math.sqrt(48).toString().includes('.')
        for (let i = b; i > a; i--) {
            if (!Math.sqrt(i).toString().includes('.')) {
                val++;
                maximumValue = i;
                maxvalsqrt = Math.sqrt(i);
                break;
            }
        }
        if (maximumValue > 0) {
            let temp = maximumValue;
            for (let i = maxvalsqrt - 1; temp >= a; i--) {
                
                temp = i * i;
                val++
            }
            if (!Math.sqrt(temp).toString().includes('.')) {
                val = val - 1;
            }
        }
    
        return val;
    },

    appendAndDelete: function(s, t, k){
        let isPossible = '';
        let returnedIndex = 0;
        let unmatchedInd = 0;

        if( s.length > t.length){
            
            if(t.length == 1 && s.split('').some(x => x != t)){
                unmatchedInd = unmatchedInd
            } else {
                unmatchedInd = s.split('').reduce((p,c,index) => {
                    let c1=  t[index];
                    if(s[index] == t[index] ){
                        returnedIndex =  index;
                    }
                    if(index > returnedIndex && t[index] == undefined){
                        returnedIndex = 0;
                    }
                    return returnedIndex;
                } ,0);
            }
            if(unmatchedInd != 0) {
                let lengthOfRemaingOfFirst = s.slice(unmatchedInd,s.length).length;
                let lengthOfRemaingOfSecond = t.slice(unmatchedInd,s.length).length;
                if(lengthOfRemaingOfFirst + lengthOfRemaingOfSecond + 2 == k ){
                    isPossible = 'Yes';
                } else {
                    isPossible = 'No';
                }
            } else {
                if(s.length - t.length < k){
                    isPossible = 'Yes';
                } else {
                    isPossible = 'No';
                }
            }
        }  else if(s.length < t.length){
            if(s.split('').every(x => x == s[0]) && t.split('').every(x => x == s[0])){
                if((t.length - s.length)%2 == 0){
                    isPossible ='Yes';
                } else {
                    isPossible = 'No';
                }
            } else {
                if((t.length - s.length) == k){
                    isPossible ='Yes';
                } else {
                    isPossible = 'No';
                }
            }           

        } else {
            if(s == t){
                isPossible ='Yes';
            } else {
                if((t.length + s.length) <= k){
                    isPossible ='Yes';
                } else {
                    isPossible = 'No';
                }
            }
        }

        return isPossible;
    },    

    bigInteger: function (data) {

        var n = parseInt(data);
        let count=0;
        let sum = [1]
        // Length is half max length b/c we're multiplying
        const MAX_LENGTH = Math.floor(String(Number.MAX_SAFE_INTEGER).length / 2) - 1
        const MAX_VALUE = Number(Array(MAX_LENGTH + 1).join('9'))
        for (let i = 2; i <= n; i++) {
            let carryover = 0
            for (let j = 0; j < sum.length; j++) {
                let newValue = sum[j] * i + carryover
                count++;
                if (newValue > MAX_VALUE) {
                    let newValueStr = String(newValue)
                    carryover = Number(newValueStr.substr(0, newValueStr.length - MAX_LENGTH))
                    sum[j] = Number(newValueStr.substr(-MAX_LENGTH))
                } else {
                    carryover = 0
                    sum[j] = newValue
                }
            }
            if (carryover !== 0) sum.push(carryover)
        }
        // Don't left-pad the highest order group
        let highestGroup = sum.pop()
        // Left pad all other groups with '0'
        sum = sum.map(v => Array(MAX_LENGTH + 1 - String(v).length).join('0') + v)
        console.log(highestGroup + sum.reverse().join('')); // 15511210043330985984000000

        return highestGroup + sum.reverse().join('');
    },

    climbingLeaderboard: function (scores, alice) {
        let positions = [];
        let distScore = [...new Set(scores)];
        let aliceIndex = 0;
        let i = distScore.length - 1;
        alice.forEach(element => {

            while (i >= 0) {
                if (element >= distScore[i]) {
                    i--;
                } else {
                    positions.push(i + 2);
                    break;
                }
            }
            if (i < 0) positions.push(1);

        });

        console.log(positions);
        return positions;

    },

    circularArrayRotation: function (a, k, queries) {
        // a= 214;
        // k = 1;
        if (a.length != k) {
            let reverse = [];

            if (a.length > k) {
                let value = a.splice((a.length - k), a.length);
                reverse = [...a];
                reverse.unshift(...value);
                a = [...reverse];
            } else {
                let value = a.splice((a.length - (k % a.length)), a.length);
                reverse = [...a];
                reverse.unshift(...value);
                a = [...reverse];
            }

            
        }
        let elements = [];
        for (let i = 0; i < queries.length; i++) {
            elements.push(a[queries[i]]);
        }

        return elements;
    },

    permutationEquation: function (p) { //P1=2,P2=3,P3=1
        let values = [];

        let pv = p.reduce(function (result, item, index, array) {
            result[index + 1] = item; //a, b, c
            return result;
        }, {});

        for (let i = 0; i < p.length; i++) {
            let firstInd = parseInt(Object.keys(pv)[Object.values(pv).indexOf(i + 1)]);
            let secondInd = Object.keys(pv)[Object.values(pv).indexOf(firstInd)];
            values.push(parseInt(secondInd));
        }

        return values;
    },

    recursion: function () {
        let list = [1, 2, 3, 4, 5];
        let accumulator = 0;

        function sum(list, accumulator) {
            if (list.length == 0) {
                return accumulator;
            }

            return sum(list.slice(1), accumulator + list[0]);
        }

        sum(list, accumulator); // 15
        list; // [1, 2, 3, 4, 5]
        accumulator; // 0
    },
    magicNumber: function (n) {
        // Taking all cobination in an Array
        let combination = [[8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [2, 7, 6, 9, 5, 1, 4, 3, 8],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [8, 3, 4, 1, 5, 9, 6, 7, 2]]

        let arMaxdif = [];
        combination.map(eacharr => {
            let maxdiffer = 0;

            arMaxdif.push(eacharr.reduce((c, cv, ci, node) => {
                {
                    c += Math.abs(cv - n[ci]);
                }
                return c;
            }, 0));

        });

        return Math.min(...arMaxdif)


    },

    serviceLane: function (n, cases) {

        let values = [];

        for (let i = 0; i < cases.length; i++) {
            let min = 0;
            let startingPoint = cases[i][0];
            let endingPoint = cases[i][1];

            for (let j = startingPoint; j <= endingPoint; j++) {
                if (min == 0) {
                    min = n[j];
                } else {
                    if (n[j] < min) {
                        min = n[j];
                    }
                }
            }
            values.push(min);
        }
        return values;

    },

    birdsProblem: function logic(data) {
        let numOfNodes = JSON.parse("[" + data.split(' ').join(',') + "]");
        let num = numOfNodes;
        let matchedItemAndCount = 0;
        let maxCount = 0;
        let itemandMatch = [];
        while (num.length > 0) {
            let toBeMatchedItem = num.shift();
            let countOfMatch = 1;
            num.reduce((c, x) => {
                if (toBeMatchedItem == x) {
                    countOfMatch++;
                }
                return countOfMatch;
            }, 0);

            if (countOfMatch > 0) {
                if (countOfMatch > maxCount) {
                    maxCount = countOfMatch;
                    matchedItemAndCount = toBeMatchedItem;
                }
                if (countOfMatch == maxCount && matchedItemAndCount > toBeMatchedItem) {
                    matchedItemAndCount = toBeMatchedItem;
                }

                itemandMatch.push([toBeMatchedItem, countOfMatch]);

            }

            num = num.filter(x => x != toBeMatchedItem);
        }
        console.log(itemandMatch);

        return matchedItemAndCount;
    },

    dayOfProgrammer: function (year) {
        let exceptFebNumberOfDays = (5 * 31) + (30 * 2);
        let totalDays = 0;
        if (year <= 1700) {
            totalDays = exceptFebNumberOfDays + 29;
        } else if (year > 1700 && year <= 1917) {
            if (year % 4 == 0) {
                totalDays = exceptFebNumberOfDays + 29;
            } else {
                totalDays = exceptFebNumberOfDays + 28;
            }
        } else if (year >= 1919) {
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                totalDays = exceptFebNumberOfDays + 29;
            } else {
                totalDays = exceptFebNumberOfDays + 28;
            }
        } else {
            totalDays = exceptFebNumberOfDays + 15;
        }

        return (256 - totalDays) + '.09.' + year;
    },

    sockMerchant: function (ar) {

        let numToMatch = 0;
        let count = 1;
        let numOfPairs = 0;
        while (ar.length > 0) {
            numToMatch = ar.shift();
            let count = ar.reduce((c, x) => {
                if (numToMatch == x) {
                    c++;
                }
                return c;
            }, 1);

            if (count > 0) {
                if (count % 2 == 0) {
                    numOfPairs = numOfPairs + count / 2;
                }
                if (count % 2 != 0 && (count - 1) > 0 && (count - 1) % 2 == 0) {
                    numOfPairs = numOfPairs + (count - 1) / 2;
                }
                count = 1;
            }
            ar = ar.filter(x => x != numToMatch);

        }


        return numOfPairs;

    },

    pageCount: function () {
        let n = 4; //--> 3810// 95073 --> 8720
        let p = 4;          // 17440

        let fromFirst = 0;
        let fromLast = 0;

        fromFirst = (p / 2).toString().split(".")[0];

        if ((n - p) <= 1) {
            if (n % 2 != 0 || (n - p) == 0) {
                fromLast = 0;
            }
            else {
                fromLast = 1;
            }
        }
        else if (n % 2 != 0) {
            if ((n - p) >= 2) {
                fromLast = ((n - p) / 2).toString().split(".")[0];
            }
            else {
                fromLast = (n - p);
            }
        }
        else {
            if ((n - p) < 2) {
                fromLast = (n - p);
            } else if ((n - p) == 2) {
                fromLast = 1;
            } else {
                fromLast = (((n - p) + 1) / 2).toString().split(".")[0];
            }

        }
        console.log('fromLast ' + fromLast);


        return parseInt(fromFirst) > parseInt(fromLast) ? fromLast : fromFirst;
    },

    countingValleys: function (s) {
        // let s = 'UDDDUDUU';

        let currLevel = 0;
        let valleys = 0;

        s = s.split('');
        for (let i = 0; i < s.length; i++) {
            //update the current level
            if (s[i] === 'U') {
                currLevel += 1;
                if (currLevel == 0) {
                    valleys += 1;
                }
            } else {
                currLevel -= 1;
            }


        }

        return valleys;
    },

    getMoneySpent: function (b, keyboards, drives) {
        

        let max = 0;

        while (keyboards.length > 0) {
            let keyboardMax = Math.max(...keyboards);
            let maxValues = drives.map(x => x + keyboardMax);
            for (let x = 0; x < drives.length; x++) {
                // if(maxValues[x] == 374625){
                //     console.log('374625');
                // }
                if (maxValues[x] > max && maxValues[x] <= b) {
                    max = maxValues[x];
                }
            };

            keyboards = keyboards.filter(x => x != keyboardMax);
        }
        console.log(max > 0 ? max : -1);
        return max > 0 ? max : -1;

    },

    catAndMouse: function (x, y, z) {

        if (Math.abs(z - x) > Math.abs(z - y)) {
            return 'Cat B';
        } else
            if (Math.abs(z - x) < Math.abs(z - y)) {
                return 'Cat A';
            } else {
                return 'Mouse C';
            }


    },

    utopianTree: function (n) {
        let height = 1;
        if (n == 0) {
            return height;
        }
        for (let i = 1; i <= n; i++) {
            if (i % 2) {
                height *= 2;
            } else {
                height += 1;
            }
        }

        return height;
    },

    viralAdvertising: function (n = 6) {
        let initialShared = 5;
        let intialLiked = 2;
        let initialCumulative = 2;
        console.log(initialShared, intialLiked, initialCumulative);
        for (let i = 1; i < n; i++) {
            initialShared = Math.floor(initialShared / 2) * 3;
            intialLiked = Math.floor(initialShared / 2);
            initialCumulative += intialLiked;
            console.log(initialShared, intialLiked, initialCumulative);
        }
        console.log('initialShared ' + initialShared);
        return initialShared;
    },

    saveThePrisoner: function (n, m, s) {

        if (m / n > 0) {
            let reminder = m % n;
            if (reminder != 0) {
                if (s == n) {
                    s = reminder;
                } else {
                    s = s + reminder;
                    if (s > n) {
                        s = s - n;
                    }
                }
            } else {
                if (s == n) {
                    s = n;
                } else {
                    s = Math.abs(s - n);
                }

            }
        } else {
            s = m + (m - s);
        }



        return s;


    }
}
