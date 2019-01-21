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
            if (s[i] === 'U') {
                currLevel++;
                valleys = this.getVallsCount(currLevel, valleys);
                
            }
            else {
                currLevel -= 1;
            }
        }
        return { currLevel, valleys };
    
    },

    getVallsCount: function(level, valleys){
        if(level == 0){
          valleys++;   
        }
        return valleys;
    }
}