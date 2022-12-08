

let number=5;
let factors=0;
for(let i=1;i<=number;i++){
if(number%i==0){
factors++
}
}
if(factors==2){
console.log("prime number")
}else{
console.log("not a prime number")
}

