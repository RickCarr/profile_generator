const readline = require('readline');
const animate = require('./animate');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable \n`, (answer0) => {
  console.log(`Ooooh~  I never met a ${answer0} before!`);

  rl.question(`What's an activity you like doing? \n`, (answer1) => {
    console.log(`${answer1}?! that's pretty cool. If I wasn't a computer I totally would too.`);


    rl.question(`What do you listen to while doing that? \n`, (answer2) => {
      console.log(`I could tell you would listen to ${answer2}. That totally makes sense!`);


      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)\n`, (answer3) => {
        console.log(`Yeah, ${answer3} is probably the most important meal of the day.`);

        rl.question(`What's your favourite thing to eat for that meal?\n`, (answer4) => {
          console.log(`Nice! May I take a MegaByte of your ${answer4} after I finish these micro-chips?`);

          rl.question(`Which sport is your absolute favourite?\n`, (answer5) => {
            console.log(`Really!? I can't see you playing ${answer5}... maybe you mean favourite to watch.\n\n\n`);

            const funProfile = `Your New Profile:\n 
            ${answer0} is an amazing person who happens to excel at ${answer1}. 
            Espescially when ${answer0} gets into the zone by listening to ${answer2}! 
            When not ${answer1}, ${answer0} can be seen enjoying ${answer5}.... Probably as a spectator.
            If you are looking for a good meal, just ask ${answer0} for their favourite ${answer3} spot to eat at.
            ${answer0}'s known for devouring at least 2 servings of ${answer4} in a sitting there...you've gotta try it!`;
            animate(funProfile);

            rl.close();

          });

        });

      });

    });

  });

});