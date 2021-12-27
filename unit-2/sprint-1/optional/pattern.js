var n=20;

for(var i=1;i<=n;i++){
    out=""
    for(var j=1;j<=i;j++){
        if((i+j)%2==0){
            out=out+"0"+" "
        }else{
            out=out+"1"+" "
        }
    }
    console.log(out);
}
// for(var i=0;i<=n;i++){
//     var out="";
//     for(var j=0;j<=n;j++){
//         if(j==0 ||j==n-1){
//             out=out+"*"+" ";
//         }else if(i==n-3&&j==n-3){
//             out=out+"*"+" "
//         }else if(i==n-2&&j==n-4){
//             out=out+"*"+" "
//         }
//         else if(i==n-2&&j==n-2){
//             out=out+"*"+" "
//         }
//         else{
//             out=out+" "+" "
//         }
//     }
//     console.log(out)
// }