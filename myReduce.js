"use strict"

let arr= [5,10,15,20];
Array.prototype.myReduce = function(callback, iniValue){
    let acc= iniValue;
    for(let i=0 ; i<this.length; i++){
        acc= callback(acc,this[i], i, this);
    }
    return acc;
}

let ans = arr.myReduce((acc, value, index, arr)=> acc+value,5);
console.log(ans);


