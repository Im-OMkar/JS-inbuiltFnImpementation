"use strict"

let arr= [5,10,15,20];
Array.prototype.myFilter = function(callback){
    let res= [];
    for(let i=0 ; i<this.length; i++){
        if(callback(this[i], i, this)){
            res.push(this[i]);
        }
    }
    return res;
}

let ans = arr.myFilter((ele)=>{
    return ele > 10;
})

console.log(ans);


