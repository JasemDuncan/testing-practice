//1.- Character Count
// function stringLength(string){
//     let arr=[];
//     arr=[...string];  
//     console.log(arr.length);
//     return arr.length;
// }
  
function stringLength(string){
    let arr=[]
    arr=[...string];
    if(arr.length>0 && arr.length<11){
        return true;
    }
    else{
        return false;
    }
}
  
module.exports=stringLength;