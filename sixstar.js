let utils = require('./sixstarutils');

module.exports ={
    alternatingCharacters: function(s){
        let firstChar = s.split('').pop();
        
        if(s.split('').every(x => x == firstChar)){
            return s.split('').length - 1;
        } 

        return utils.countOfChnages(s);

    },

    superReducedString: function(s) {

      let val ='';
      let checkstatus = false;
        while(checkstatus == false){
            checkstatus = true;
            s = gettring(s.split(''));
        }

        if(s.length > 0){
            if(s.split('').every(x => x == s.charAt(0))) {
                return 'Empty String';
            }
            else {
                return s;
            };

        } else {
           return 'Empty String'
        }


      function gettring(ar){
          let str ='';
        for(let i =0 ;i<ar.length;i++){
            if(ar[i + 1] == undefined) {
              str += ar[i];
              break;
            }
  
            if(ar[i] != ar[i+1]){
                  str += ar[i];
                  checkstatus = false;
            } else {
                i++;
            }
        }
        
        if(str ==  ar.join('')) checkstatus= true;
        return str;
      }

    },

    stringConstruction: function(s){
       return [...new Set(s.split(''))].length;

    }
}