module.exports ={
    alternatingCharacters: function(s){
        let firstChar = s.split('').pop();
        
        if(s.split('').every(x => x == firstChar)){
            return s.split('').length - 1;
        } 

    },
}