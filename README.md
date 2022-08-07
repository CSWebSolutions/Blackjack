# Blackjack Technical Challenge for Pickatale

## Author: Clayton Suares

### Environment

This solution requires NodeJS and NPM.

### Set up

From the solution root folder, in your terminal, run `npm i`

This will ensure you have the correct versions and packages for this solution.

### Execution

Run the application from the solution root folder in your terminal using `node blackjack.js`

Run the unit tests from the solution root rolder in your terminal using `npm run test`

### Alternative Code & Improvements

I wrote an additional input section to get a player name. Since the requiremetns asked for a "HTTP service", I felt this did not meet these requirements, so I removed it.

```Javascript
const prompt = require('prompt');
const config = require('config');

prompt.start();

console.clear();
console.log("Welcome to Blackjack!");
console.log("=====================");
console.log("");
console.log("You will be playing against " + config.get('player2name') + ".");
console.log("");
console.log("Please enter the name of Player 1 below:")
prompt.get(['Player_1_Name'], function (err, result) {
    if (err) {
        return onErr(err);
    }

    playBlackjack(result.Player_1_Name);
});

function onErr(err) {
    console.log(err);
    return 1;
}
```
Other Improvements include:

* Better error handling
* Integration tests for playBlackjack method

