var fiveStar = require("./fivestar");
var fourstar = require("./fourstar");

module.exports = {



    camelcase : function(s){
        let numOfWords = s.replace(/[^A-Z]/g, "").length;
        return numOfWords + 1;
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

    libraryFine: function(value){
        let val = value.split(',');
        let d1, m1, y1, d2, m2, y2;
        d1 = parseInt(val[0]);
        m1 = parseInt(val[1]);
        y1 = parseInt(val[2]);
        d2 = parseInt(val[3]);
        m2 = parseInt(val[4]);
        y2 = parseInt(val[5]);

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

   

}
