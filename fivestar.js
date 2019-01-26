var utils= require('./fivestar.utils');

module.exports = {
    pangrams: function(s){
        s = s.toLowerCase();
        let alp = 'abcdefghijklmnopqrstuvwxyz'.split('');
        let count = 1;

        count = alp.reduce((pv,cv) => {
            if(s.includes(cv)) {
                pv++;
            }
            
            return pv;
        },1);
      
        return count > 26 ? 'pangram' : 'not pangram';

    },

    hackerrankInString: function(s){
        let mainString = 'hackerrank'.split('');
        let isPossible = '';
        let passedStrCharSet = s.split('');
        let i =0;
        while(passedStrCharSet.length > 0){
            let temp = mainString[i];
            let temp1 = passedStrCharSet.join('');
            if(passedStrCharSet.findIndex(x => x == mainString[i]) > -1){
                
                let ind = passedStrCharSet.findIndex(x => x == mainString[i]);
                passedStrCharSet = passedStrCharSet.slice(ind == 0 ? 1 : ind + 1, passedStrCharSet.length);

                i++;
            } else {
                break;
            }
            
            
        }
        if(i == mainString.length){
            isPossible  = "YES";
        } else {
            isPossible = 'NO';
        }
        
        return isPossible;
    },

    marsExploration : function(s) {
        let exceptSOS = s.split('').filter(x => x != 'SOS');
        let changed = 0;
        changed = utils.marsExplorationutils(exceptSOS,changed);

        return changed;
    
    },

    timeInWords: function(h, m){
        let single = ['','one','two','three','four','five','six','seven','eight','nine'];
        let ten = ['ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' quarter', ' sixteen', ' seventeen', ' eighteen', ' nineteen','twenty'];

        let retString = '';


        if(m == 00){
            retString += single[h] + ' o\' clock';
        } else if(Number(m).toString().length == 1){
            retString += single[m] + ' minute past '+single[h];
        } else {
            // Past
            if(Number(m)<30){
                if(Number(m)< 20){
                    if(Number(m) == 15){
                        retString += ten[Number(m.toString().slice(1,2))] + ' past '+single[h];
                    } else {
                    retString += ten[Number(m.toString().slice(1,2))] + ' minute past '+single[h];
                    }
                } else {
                    retString += 'twenty ' + single[Number(m.toString().slice(1,2))] + ' minutes past '+single[h];
                }
            } // To
             else if(Number(m)>30){
                if(60 - Number(m)< 9){
                    retString +=  single[Number((60 - Number(m)).toString())] + ' minutes to';
                    if(single[h + 1] != undefined){
                        retString +=  single[h + 1];
                    } else {
                        retString += ten[Number(h) - 10 + 1];
                    }

                } else {
                    if(60 - Number(m) > 9 && 60 - Number(m) < 20){
                        if(60 - Number(m) == 15){
                            retString += ten[Number((60 - Number(m)).toString().slice(1,2))] + ' to '+single[h + 1];
                        } else {
                            retString += ten[Number((60 - Number(m)).toString().slice(1,2))] + ' minutes to '+single[h + 1];
                        }

                    } else {
                        retString += 'twenty ' + single[Number((60 - Number(m)).toString().slice(1,2))] + ' minutes to '+single[h + 1];

                    }
                }

            } // For 30 
             else {
                retString += 'half past '+single[h];
            }
        }

        return retString.trim();
    },

    funnyString: function (s){
        let ansciValueOfString = [];
        let ansciValueOfReverseString = [];

        ansciValueOfString.push(

            s.split('').map((x) => x.charCodeAt(0))
            
        );

        ansciValueOfReverseString.push(

            s.split('').reverse().map((x) => x.charCodeAt(0))
            
        );

        let isFunnyOrNot = '';

         
        for(let i =0; i<ansciValueOfString[0].length; i++){
            if(ansciValueOfString[0][i + 1]  == undefined) {
                return isFunnyOrNot == '' ? 'Not Funny' :  isFunnyOrNot;
            }
            isFunnyOrNot= utils.checkFunnyOrNot(ansciValueOfString[0][i],ansciValueOfString[0][i + 1]
                            ,ansciValueOfReverseString[0][i],ansciValueOfReverseString[0][i + 1]);
            if(isFunnyOrNot == 'Not Funny'){
                break;
            }
        }

        return isFunnyOrNot;
    },

   

    minimumDistances : function(a) {
        let minimumDist = a.length;
        for(let i= 0; i< a.length; i++){
            for(let j = a.length - 1; j> i; j--){
                let k= a[i];
                let n=a[j];
                if(a[i] == a[j] && (j - i)< minimumDist){
                    minimumDist = j-i;
                    break;
                }
            }
        }
        return minimumDist == a.length ? -1 : minimumDist;
    },

    jumpingOnCloudsEmma: function (c) {
        if (c.every(x => x == 0)) {
            return 1;
        }

        let numOfJumps = 0;
        let startingPoint = 0;
        for (let i = 0; i < c.length; i++) {
            if(i == 0 && c[i] == 0){
                startingPoint = 0;
                continue;
            }
            if(i == startingPoint + 2 && c[i] == 0){
                startingPoint = i;
                numOfJumps++;
            } else if(c[i] == 0 && c[i+1] != undefined && c[i+1] == 1){
                startingPoint = i;
                numOfJumps++;
            } else {
                numOfJumps = numOfJumps;
            }
            if(c[i + 1] == undefined && (startingPoint <= i -1 || startingPoint <= i -2) ){
                numOfJumps++;
            }
        }

        return numOfJumps;
    },
    
    jumpingOnClouds: function(c, k){
        
        let energy =100;

        if(c == k){
            if(c[0] == 1){
                energy =energy -3;
            }
        } else {

            for(let i =0;i<c.length;i++){
                let afterJumpClud = i + k;
                energy--;
                if(c[afterJumpClud] == 1){
                    energy =energy -2;
                }
                i = afterJumpClud - 1;
            }

            if(c.length % k != 0){
                if(c[0] == 1){
                    energy = energy -2;
                } else{
                    energy--;
                }
            }
            if(c.every( x => x == 1)){
                energy = 100 - c.length * 3;
            }
            
        }

        return energy

    },
}