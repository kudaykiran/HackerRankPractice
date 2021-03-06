let utils = require('./sixstarutils');

var calculate = (function () {

    var getBuyAndSellDays = function (vals, minVal) {
        let buy_Days = [], sell_Days = [];
        let buyDay = 0;
        let sellDay = 0;
        if (vals.indexOf(minVal.toString()) < parseInt(vals.length / 2)) {
            let newarr = vals.filter(x => x != minVal);

            [buyDay, sellDay] = getMinMax(vals.slice(0, vals.indexOf(Math.min(...newarr).toString())));
            buy_Days.push(vals.indexOf(buyDay.toString()));
            sell_Days.push(vals.indexOf(sellDay.toString()));
            [buyDay, sellDay] = getMinMax(vals.slice(vals.indexOf(Math.min(...newarr).toString()), vals.length));
            buy_Days.push(vals.indexOf(buyDay.toString()));
            sell_Days.push(vals.indexOf(sellDay.toString()));


        } else {
            [buyDay, sellDay] = getMinMax(vals.slice(0, vals.indexOf(minVal.toString())));
            buy_Days.push(vals.indexOf(buyDay.toString()));
            sell_Days.push(vals.indexOf(sellDay.toString()));
            [buyDay, sellDay] = getMinMax(vals.slice(vals.indexOf(minVal.toString()), vals.length));
            buy_Days.push(vals.indexOf(buyDay.toString()));
            sell_Days.push(vals.indexOf(sellDay.toString()));
        }

        return [buy_Days, sell_Days];
    }

    var getMinMax = function (args) {
        return [buyDay = Math.min(...args), sellDay = Math.max(...args)]
    }

    return {
        getBuyAndSellDays: getBuyAndSellDays,
    }
}());

// var countVals = 

module.exports = {


    beautifulBinaryString: function (b) {

        let arrayOfNum = b.split('');
        let indexOfOne = [];

        arrayOfNum.filter((v, index) => {
            let lastIndex = indexOfOne.length > 0 ? indexOfOne[indexOfOne.length - 1] : undefined;
            if (v == 1) {
                if (lastIndex == undefined || index > lastIndex + 2) {

                    indexOfOne.push(index);
                }
            }

        });

        let count = 0;

        // It is getting 24 count of 1 where 1 is next + 2 index from previous one
        // MAY BE NEED TO FIND THE INDEX OF 010 AND DELETE FROM THAT INDEX AND INCREASE COUNT AND DO STUFF AGAIN
        for (let i = 0; i < indexOfOne.length; i++) {
            if (arrayOfNum[indexOfOne[0] - 1] == undefined || arrayOfNum[indexOfOne[0] + 1] == undefined) {
                continue;
            }
            else if (arrayOfNum[indexOfOne[0] - 1] == 0 && arrayOfNum[indexOfOne[0] + 1] == 0) {
                count++;
            }
            else {
                continue;
            }
        }

        return count;

    },

    equalizeArray: function (arr) {
        let distVal = [...new Set(arr.sort())];// arr.sort();
        let countOfEach = distVal.map(x => countVals(x, arr));
        let maxValue = Math.max(...countOfEach);
        countOfEach = countOfEach.filter(x => x != maxValue);
        let totalCount = countOfEach.reduce((c, x) => c + x, 0);

        function countVals(a, ar) {
            let count = 0;
            count = ar.reduce((c, x) => {
                if (x == a) {
                    count++;
                }
                return count;

            }, 0);
            return count;
        }
        if (totalCount <= maxValue) {
            return totalCount;
        }
        else {
            return Math.max(...countOfEach);
        }
    },

    buyAndSellDay: function (arr) {
        // 100 180 260 310 40 535 695
        // 23 13 25 29 33 19 34 45 65 67
        let buy_Days = [], sell_Days = [];
        let vals = arr.split(' ');

        let minVal = Math.min(...vals);

        [buy_Days, sell_Days] = calculate.getBuyAndSellDays(vals, minVal);

        return [buy_Days, sell_Days];
    },

    anagram: function (s) {
        let ar = s.split('');
        if (ar.length % 2 != 0) {
            return -1;
        }
        // d,v,o,s
        let middlePoint = ar.length / 2;
        let firstSet = ar.slice(0, middlePoint);
        let secondSet = ar.slice(middlePoint, ar.length);

        let count = 0;

        firstSet.map(x => {
            if (!secondSet.some(y => y == x)) {
                count++;
            }
            // [, ...secondSet] = secondSet;
            return 0;
        });

        return count;
    },

    alternatingCharacters: function (s) {
        let firstChar = s.split('').pop();

        if (s.split('').every(x => x == firstChar)) {
            return s.split('').length - 1;
        }

        return utils.countOfChnages(s);

    },

    superReducedString: function (s) {

        let val = '';
        let checkstatus = false;
        while (checkstatus == false) {
            checkstatus = true;
            s = gettring(s.split(''));
        }

        if (s.length > 0) {
            if (s.split('').every(x => x == s.charAt(0))) {
                return 'Empty String';
            }
            else {
                return s;
            };

        } else {
            return 'Empty String'
        }


        function gettring(ar) {
            let str = '';
            for (let i = 0; i < ar.length; i++) {
                if (ar[i + 1] == undefined) {
                    str += ar[i];
                    break;
                }

                if (ar[i] != ar[i + 1]) {
                    str += ar[i];
                    checkstatus = false;
                } else {
                    i++;
                }
            }

            if (str == ar.join('')) checkstatus = true;
            return str;
        }

    },

    stringConstruction: function (s) {
        return [...new Set(s.split(''))].length;

    },

    isValid: function (s) {
        let distEle = [...new Set(s.split(''))];
        let count = [];
        let values = s.split('');

        distEle.map((x, i) => {
            let c = 0;
            for (let ind = 0; ind < values.length; ind++) {
                if (x == values[ind]) {
                    c++;
                }
            }
            count.push(c);
            return c;
        });
        if (count.every(x => x == count[0])) {
            return 'YES';
        } else {

            if (count.filter(x => x != count[0]).length > 1) { return 'NO'; }

            if ([...new Set(count)].length > 2) {
                return 'NO';
            } else {
                let newDist = [...new Set(count)];
                if (newDist.length == 2 && newDist[1] != undefined && (Math.abs(newDist[1] - newDist[0]) == 1 || newDist[1] == 1 || newDist[0] == 1)) {
                    return 'YES';
                }
                else {
                    return 'NO';
                }

            }
        }
    },



}