var utils = require('./fourstarutils');

module.exports ={

    gemstones: function(arr){
        let sample = arr[0].split('');
        let count =0;
        let ele = [];
        for(let i = 0; i<sample.length;i++){
            if(check(sample[i], arr) == 'Y'){
                if(!ele.some(x => x ==  sample[i])){
                    ele.push(sample[i]);
                    count++;
                }
            }
        }

        function check(elemt, arr){
            let Val = 'Y';
            for(let i =0; i < arr.length;i++){
                if(!arr[i].includes(elemt)){
                    return 'N';
                } 
            }

            return Val;
        }

        return count;
    },
    saveThePrisoner: function (n, m, s) {

        let a = s + m - 1;
        if (a > n) {
            if (a % n == 0) {
                return n;
            }
            return a % n;
        }
    
        return a;


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
        }
        return initialShared;
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

    getMoneySpent: function (b, keyboards, drives) {
        
        let max = 0;

        while (keyboards.length > 0) {
            let keyboardMax = Math.max(...keyboards);
            let maxValues = drives.map(x => x + keyboardMax);
            max = getMaxValue(maxValues,drives);

            keyboards = keyboards.filter(x => x != keyboardMax);
        }

        
        
        return max > 0 ? max : -1;

    },

    getMaxValue: function(maxValues, drives){
        for (let x = 0; x < drives.length; x++) {
            
            if (maxValues[x] > max && maxValues[x] <= b) {
                max = maxValues[x];
            }
        };
        return max;
    },

    countingValleys: function (s) {

        let currLevel = 0;
        let valleys = 0;

        s = s.split('');
        valleys = utils.getVallies(s,currLevel,valleys);

        return valleys;
    },

    pageCount: function (n,p) {
        // let n = 4; //--> 3810// 95073 --> 8720
        // let p = 4;          // 17440

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
}