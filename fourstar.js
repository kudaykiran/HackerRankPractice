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
            for (let x = 0; x < drives.length; x++) {
                
                if (maxValues[x] > max && maxValues[x] <= b) {
                    max = maxValues[x];
                }
            };

            keyboards = keyboards.filter(x => x != keyboardMax);
        }
        console.log(max > 0 ? max : -1);
        return max > 0 ? max : -1;

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
}