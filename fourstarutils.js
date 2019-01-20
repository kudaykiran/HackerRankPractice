module.exports ={
    getVallies: function(s,currLevel,valleys){
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
}