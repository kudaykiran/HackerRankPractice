module.exports= {
    getFine: function(cond1,cond2 , selection){
        return (cond1 <= cond2) ? 0 : Math.abs(selection * (cond2 -cond1));

    }
}