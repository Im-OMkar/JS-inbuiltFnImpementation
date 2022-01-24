"use strict"

let arr= [5,10,15,20];
Array.prototype.myForEach = function(callback){
    for(let i=0 ; i<this.length; i++){
        callback(this[i], i, this);
    }
}

arr.myForEach((currValue)=>{
    console.log(currValue+2);
})

