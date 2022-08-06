'use strict';

const { countDeck, compareDecks, prepareDeckForDisplay } = require('./utilities');
const axios = require('axios');
const config = require('config');

async function playBlackjack(player1Name) {
    try {
        let response = await axios.get(config.get('shuffle_url'));
        let player2Name = config.get('player2name');
        let player1Deck = [];
        let player2Deck = [];
        let deckPosition = 0;
        let gameStatus = "";
        let players = [player1Name, player2Name];

        let deckArray = [];
        response.data.forEach(card => {
            let cardArray = [card['suit'], card['value']];
            deckArray.push(cardArray);
        });

        // deal player 1 cards x2
        player1Deck.push(deckArray[deckPosition]);
        deckPosition++;

        player1Deck.push(deckArray[deckPosition]);
        deckPosition++;

        // deal player 2 cards x2
        player2Deck.push(deckArray[deckPosition]);
        deckPosition++;

        player2Deck.push(deckArray[deckPosition]);
        deckPosition++;

        // check cards and deal more cards according to rules
        let exitLoop = false;
        do {

            gameStatus = compareDecks(countDeck(player1Deck), countDeck(player2Deck));

            switch (gameStatus[0]) {
                case "win":
                    exitLoop = true;
                    break;
                case "draw":
                    exitLoop = true;
                    break;
                case "card":
                    switch (gameStatus[1]) {
                        case 1:
                            player1Deck.push(deckArray[deckPosition]);
                            deckPosition++;
                            break;
                        case 2:
                            player2Deck.push(deckArray[deckPosition]);
                            deckPosition++;
                            break;
                    }
                    break;
            }

        } while (exitLoop == false);


        // parse result to JSON

        const gameResult = {
            winner: gameStatus[1] > 0 ? players[gameStatus[1] - 1] : "None",
            players: [
                {
                    name: player1Name,
                    points: countDeck(player1Deck),
                    cards: JSON.stringify(prepareDeckForDisplay(player1Deck))
                },
                {
                    name: player2Name,
                    points: countDeck(player2Deck),
                    cards: JSON.stringify(prepareDeckForDisplay(player2Deck))
                }
            ]
        }

        console.log(gameResult);

    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

playBlackjack("Clayton");


