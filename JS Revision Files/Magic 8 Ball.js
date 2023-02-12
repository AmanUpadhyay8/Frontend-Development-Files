let userName = "Anakin";

userName ? console.log(`Hello, ${userName}!`) : console.log("Hello!");

let userQuestion = "Will it man utd win today?";

console.log(`${userName} asked, ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {

  case 0 :
    eightBall = 'It is certain';
    break;
  case 1 : 
    eightBall = 'It is decidedly so';
    break;
  case 2 :
    eightBall ='Reply hazy try again';
    break;
  case 3 :
    eightBall = 'Cannot predict now';
    break;
  case 4 : 
    eightBall = 'Don\'t count on it';
    break;
  case 5 :
   eightBall = 'My sources say no';
    break;
  case 6 :
    eightBall = 'Outlook not so good';
    break;
  case 7 :
    eightBall = 'Signs point to yes';
    break;
  default :
    eightBall = 'Yo dude, stop this magic 8 ball shit go work hard make it on your own.'
};

console.log(`The Mighty Eight Ball says, ${eightBall}`);














