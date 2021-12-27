var n=100;
var count=0
var i=0;
while(i<=n){
    if(n%i==0){
        count++
    }
    i++;
}
if(count==2){
    console.log("yes")
}else{
    console.log("no")
}
for(var i=2;i<=n;i++){
    var count=0;
    for(var j=1;j<=i;j++){
        if(i%j==0){
            count++
        }
    }
    if(count==2){
        console.log(i);
    }
}
