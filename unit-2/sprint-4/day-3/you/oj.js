function stack(arr){
 var obj={}
   for(var i=0;i<arr.length;i++){
     if(obj[arr[i]]==undefined){
       obj[arr[i]]=1
     }else{
       obj[arr[i]]++
     }
   }
   var arr1=[]
   for(key in obj){
     if(obj[key]%2==1){
       arr1.push(key)
     }
   }
   console.log(arr1.join(""))
}

function runProgram(input) {
    var input=input.trim();
       stack(input)
  
    }
    
         if (process.env.USER === "ssk") {
           runProgram(`aaabccddd      
           `);
         } else {
           process.stdin.resume();
           process.stdin.setEncoding("ascii");
           let read = "";
           process.stdin.on("data", function (input) {
             read += input;
           });
           process.stdin.on("end", function () {
             read = read.replace(/\n$/, "");
             read = read.replace(/\n$/, "");
             runProgram(read);
           });
           process.on("SIGINT", function () {
             read = read.replace(/\n$/, "");
             runProgram(read);
             process.exit(0);
           });
         }