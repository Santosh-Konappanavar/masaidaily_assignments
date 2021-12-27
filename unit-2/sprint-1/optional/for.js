var n=10;
for(var i=0;i<n;i++){
    var str=""
   for(var j=0;j<n;j++){
     if(j==0||j==n-1||i==0||i==n-1){
         str=str+"*"+" "
     }else{
         str=str+" "+" "
     }
   }
   console.log(str);
}