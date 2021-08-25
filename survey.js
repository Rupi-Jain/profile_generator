const { RSA_X931_PADDING } = require('constants');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
//let str;

rl.question('What\'s your name? Nicknames are also acceptable :) ', (name) => {
  rl.question('What\'s an activity you like doing? ', (activity) => {
    rl.question('What do you listen to while doing that? ', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal? ', (favFood) => {
          rl.question('Which sport is your absolute favourite? ', (favsport) => {
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (supPower) => {
              console.log(`${name} loves to listen ${music} while doing ${activity}, love to eat ${favFood} for ${meal}, prefers ${favsport} over any other sport, and is amazing at ${supPower}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});
 