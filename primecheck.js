

function Checkprime(num){
    let factors=0
   for(let i =0;i<=num;i++){
    if(num%i==0){

        factors++
    }
   }if(factors==2){
    console.log(num, "Prime")
   }else {
    console.log(num, "Not a prime")
   }
}
Checkprime(13);

