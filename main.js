//
let userName='Winfred';

userName ? console.log(`Hello ${userName}!`) : console.log('Hello!');

const UserQuestion='When will the world end?';

console.log(`My name is ${userName} and my question is: ${UserQuestion}`);

let randomNumber=Math.floor(Math.random()*8);

let eightBall='';

switch(randomNumber){
  case 0:
  eightBall='It is certain';
  break;
  case 1:
  eightBall='It is decidedly so';
  break;
  case 2:
  eightBall='Reply hazy try again';
  break;
  case 3:
  eightBall='Cannot predict now';
  break;
  case 4:
  eightBall='Do not count on it';
  break;
  case 5:
  eightBall='My sources say no';
  break;
  case 6:
  eightBall='Signs point to yes';
  break;
  case 7:
   eightBall='Signs point to yes';
   break;
   default:
   eightBall='I don\'t know!';
   break;
}

console.log(`I am the magic  8 ball and my answer is: ${eightBall}!`);

