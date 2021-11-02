const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(
  "What's your name? Nicknames are also acceptable :) - ",
  (answer1) => {
    console.log(`Thank you for telling your name, ${answer1}`);
    rl.question("What's an activity you like doing? - ", (answer2) => {
      console.log(`Sounds like an awesome activity!`);
      rl.question("What do you listen to while doing that? - ", (answer3) => {
        console.log(`Totaly get it, listening to ${answer3}`);
        rl.question("What is your favorite food? - ", (answer4) => {
          console.log(`Yum!`);
          rl.question(
            "Which sport is your absolute favorite? - ",
            (answer5) => {
              console.log(`I too love watching ${answer5}!`);
              rl.question(
                "What is your superpower? In a few words, tell us what you are amazing at! - ",
                (answer6) => {
                  console.log(`Wow! That is amazing!`);
                  console.log(
                    `Here is your automatically generated profile ---> 
                My name is ${answer1}, and I like ${answer2}. While I'm ${answer2}, I like to listen to ${answer3}. My favorite thing to eat is ${answer4}. I love to watch and, when I'm feeling up to it, play ${answer5}. I would say the thing I'm best at, would be ${answer6}!`
                  );
                  rl.close();
                }
              );
            }
          );
        });
      });
    });
  }
);
