module.exports = {
    getMaxValue: function(maxValues,drives,max,b){
        for (let x = 0; x < drives.length; x++) {
            
            if (maxValues[x] > max && maxValues[x] <= b) {
                max = maxValues[x];
            }
        }

        return max;
    },

    getValleys: function(s, currLevel, valleys){
        for (let i = 0; i < s.length; i++) {
            //update the current level
            if (s[i] === 'U') {
                currLevel += 1;
                if (currLevel == 0) {
                    valleys += 1;
                }
            }
            else {
                currLevel -= 1;
            }
        }
        return { currLevel, valleys };
    
    }
}