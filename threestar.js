module.exports ={
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

}