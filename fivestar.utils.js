module.exports ={
    marsExplorationutils: function(exceptSOS, changed){
        for(let i = 0; i<exceptSOS.length ; i= i+3){
            if(exceptSOS[i] != 'S'){
                changed++;
            }
            if(exceptSOS[i + 1] != 'O'){
                changed++;
            }
            if(exceptSOS[i + 2] != 'S'){
                changed++;
            }
        }

        return changed;
    }
}