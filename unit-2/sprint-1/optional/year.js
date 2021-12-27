var year = 2000;

for(var i=1;i<=12;i++){
    var days=31;
    if(i==4||i==6||i==9||i==11){
        var days=30;
    }
    if(i==2){
        if(year%4==0||year%400==0){
            var days=28;
        }else{
            var days=29;
        }
    }
    for(var j=1;j<=days;j++){
        console.log(year+"-"+i+"-"+j)
    }
}