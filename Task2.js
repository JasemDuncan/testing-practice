//1.- Character Count
function reverseString(string){
    let arr=[];
    arr=[...string];  
    arr=arr.reverse();
    return arr.join("");
}

  
module.exports=reverseString;