'use strict';

function translateCard(cardName) {

    try {
        switch (cardName) {
            case "J":
            case "Q":
            case "K":
                return 10;
                break;
            case "A":
                return 11;
                break;
            default:
                return parseInt(cardName);
        }
    } catch (error) {
        console.error(`Error: ${error}`);
    }

}

function parseCard(card) {

    try {
        let abbreviation = card[0].substring(0, 1) + card[1];

        return abbreviation;

    } catch (error) {
        console.error(`Error: ${error}`);
    }

}

function prepareDeckForDisplay(playerDeck) {

    let preparedDeck = [];

    playerDeck.forEach(card => {
        preparedDeck.push(parseCard(card));
    });

    return preparedDeck;
}


function countDeck(playerDeck) {

    try {
        let deckTotal = 0;
        playerDeck.forEach(card => {
            deckTotal += translateCard(card[1]);
        });

        return deckTotal;

    } catch (error) {
        console.error(`Error: ${error}`);
    }

}

function compareDecks(player1Total, player2Total) {

    if (isNaN(player1Total) || isNaN(player2Total) || Number.isInteger(player1Total) == false || Number.isInteger(player2Total) == false) {
        throw ('Card data error');
    }

    try {
        let result = [];

        switch (true) {
            case (player1Total > 21 && player2Total <= 21):
                // P2 Win
                result = ["win", 2];
                break;
            case (player1Total <= 21 && player2Total > 21):
                // P1 Win
                result = ["win", 1];
                break;
            case (player1Total >= 17 && player2Total >= 17):
                // Compare
                switch (true) {
                    case (player1Total > player2Total):
                        //p1 win
                        result = ["win", 1];
                        break;
                    case (player1Total < player2Total):
                        //p2 win
                        result = ["win", 2];
                        break;
                    default:
                        //draw
                        result = ["draw", 0];
                }
                break;
            case (player1Total < 17 && player2Total >= 17): // rule not required but left in for clarity
                // P1 Card
                result = ["card", 1];
                break;
            case (player1Total >= 17 && player2Total < 17):
                // P2 Card
                result = ["card", 2];
                break;
            default:
                // both players need cards - deal to p1
                result = ["card", 1];
        }

        return result;
    } catch (error) {
        console.error(`Error: ${error}`);
    }

}

function generateJson() {


    return jsonString;
}

module.exports = {
    translateCard,
    parseCard,
    prepareDeckForDisplay,
    countDeck,
    compareDecks

}