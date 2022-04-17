const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable!`, (answer1) => {
  console.log(`My name is ${answer1}`);
  rl.question(`What's your favorite hobby?`, (answer2) => {
    console.log(`My favorite activity is ${answer2}`);
    rl.question(`What's your favorite music?`, (answer3) => {
      console.log(`My favorite music is ${answer3}`);
      rl.question(`What's your favorite meal?`, (answer4) => {
        console.log(`My favorite meal is ${answer4}`);
        rl.question(`What's your favorite sport?`, (answer5) => {
          console.log(`My favorite sport is ${answer5}`);
          rl.question(`What's your superpower?`, (answer6) => {
            console.log(`My superpower is ${answer6}`);
            rl.close();
          });
        });
      });
    });
  });
});
