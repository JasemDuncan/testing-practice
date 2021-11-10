//1.- Reverse String
function reverseString(string){
    let arr=[];
    arr=[...string];  
    arr=arr.reverse();
    return arr.join("");
}

  
module.exports=reverseString;