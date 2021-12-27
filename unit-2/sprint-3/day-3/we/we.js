var numbers=[1,2,3,4,5,6,7];
numbers.forEach(function(el){
    console.log(el**2)
})
function double(el){
    return el*2
}
var a=numbers.map(double);
console.log(a)
 
var iseven = function(el){
    return el%2==0;
}
var b=numbers.filter(iseven);
console.log(b);

var product = function(ac,el){
    return ac*el;
}
var c=numbers.reduce(product)
console.log(c);

var sum=function(ac,el){
    return ac+el
}
var evennum=numbers.filter(iseven).reduce(sum)
console.log(evennum);

var muti3=function(el){
    return el%3==0;
}
var cube=function(el){
    return el**3
}
var m3cub=numbers.filter(muti3).map(cube).reduce(sum);
console.log(m3cub)
// var items=[
//     {name:"santosh",age:26,gender:"M"},
//     {name:"vinod",age:32,gender:"F"}
// ];
// var isMale = function(el){
//     return el.gender==="M"
// }
// var Mitem=items.filter(isMale);
// console.log(Mitem)