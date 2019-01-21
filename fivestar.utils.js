module.exports ={
    marsExplorationutils: function(exceptSOS, changed){
        for(let i = 0; i<exceptSOS.length ; i= i+3){
            changed = this.getchangedValue(exceptSOS[i],'S', changed);
            changed = this.getchangedValue(exceptSOS[i+1],'O', changed);
            changed = this.getchangedValue(exceptSOS[i+2],'S', changed);
        }

        return changed;
    },

    getchangedValue(cond, matchedItem,changed){
        if(cond != matchedItem){
            changed++;
        }
        return changed;
    },
    checkFunnyOrNot: function(ansciValue1, ansciValue2,ansciValueReverse1, ansciValueReverse2, isFunnyOrNot){
        let passedValue = isFunnyOrNot;
        if(ansciValue2  == undefined) {
            return passedValue == '' ? 'Not Funny' :  passedValue;
        } else if( Math.abs(ansciValue2 - ansciValue1)
              != Math.abs(ansciValueReverse2 - ansciValueReverse1)){
                passedValue = 'Not Funny';
                
        } else {
            passedValue = 'Funny';
        }

        return passedValue

    },
}