module.exports = {
    getMaxValue: function(maxValues,drives,max,b){
        for (let x = 0; x < drives.length; x++) {
            
            if (maxValues[x] > max && maxValues[x] <= b) {
                max = maxValues[x];
            }
        }

        return max;
    },
}