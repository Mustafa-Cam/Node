
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('Lütfen 1. sayı girin: ', (userInput1) => {
rl.question('Lütfen 2. sayı girin: ', (userInput2) => {
    // Kullanıcının girdiği metni sayıya dönüştürme
    const number1 = parseFloat(userInput1);
    const number2 = parseFloat(userInput2);
    let isprime=false;
    // Elde edilen sayıyı kontrol etme
    if (!isNaN(number1)&&!isNaN(number2)){
      console.log('Girilen 1. sayı:', number1);
      console.log('Girilen 2. sayı:', number2);

        for(let i=number1;i<number2;i++){
          for(let j=2;j<i;j++){
            if(i%j==0){
              isprime=false;
              break;
            }
            isprime=true;
          }
          if(isprime==true){
            console.log(i+' is a prime number');
          }
        }

    } else {
      console.log('Geçerli bir sayı girmediniz.');
    }
    rl.close();
})
})
