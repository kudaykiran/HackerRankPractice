module.exports ={
    countOfChnages: function (s){
        let elemens = s.split('');
        let countOfChanges = 0;

        let startingChar = s.charAt(0);

        for(let i=1;i<elemens.length; i++){
            if( elemens[i] == startingChar){
                countOfChanges++;
            }
            startingChar = elemens[i];
            
        }

        return countOfChanges;
    }
}