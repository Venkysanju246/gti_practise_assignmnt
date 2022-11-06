

function Checkprime(num){
    let count=0
   for(let i =0;i<=num;i++){
    if(num%i){
        count++
    }
   }if(count==2){
    console.log(num, "Prime")
   }else {
    console.log(num, "Not a prime")
   }
}

