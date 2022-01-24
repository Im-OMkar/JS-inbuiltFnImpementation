"use strict"

let arr= [5,10,15,20];
Array.prototype.myMap = function(callback){
    let res= [];
    for(let i=0 ; i<this.length; i++){
        res.push(callback(this[i], i, this));
    }
    return res;
}

let ans= arr.myMap((ele)=>{
    return ele= ele+2;
})
console.log(ans);
console.log(ans.length);

