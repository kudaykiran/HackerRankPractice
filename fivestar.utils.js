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
    }
}