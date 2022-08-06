const { translateCard, parseCard, prepareDeckForDisplay, countDeck, compareDecks } = require('./utilities');

describe("Utilities Tests for card translation method", () => {


    test("1-10 return equivalent integer -> 1", () => {
        var result = translateCard("1");

        expect(result).toBe(1);
    });

    test("1-10 return equivalent integer -> 10", () => {
        var result = translateCard("10");

        expect(result).toBe(10);
    });

    test("Face cards return 10 -> J", () => {
        var result = translateCard("J");

        expect(result).toBe(10);
    });

    test("Ace returns 11 ", () => {
        var result = translateCard("A");

        expect(result).toBe(11);
    });
})

describe("Utilities Tests for deck count method", () => {

    test("Combination of 5, 10, Q, A totals 36", () => {

        var dummyDeck = [["SPADES", "5"], ["CLUBS", "10"], ["DIAMONDS", "Q"], ["HEARTS", "A"]];

        var result = countDeck(dummyDeck);

        expect(result).toBe(36);
    });

})


describe("Utilities Tests for card parsing method", () => {

    test("Passing 6 of Spades returns S6", () => {

        var card = ["SPADES", "6"];

        var result = parseCard(card);

        expect(result).toBe("S6");
    });

    test("Passing Queen of Hearts returns HQ", () => {

        var card = ["HEARTS", "Q"];

        var result = parseCard(card);

        expect(result).toBe("HQ");
    });

    test("Passing 10 of Clubs returns C10", () => {

        var card = ["CLUBS", "10"];

        var result = parseCard(card);

        expect(result).toBe("C10");
    });

})


describe("Utilities Tests for deck preparation for display method", () => {

    test("Passing an array of 6 of Spades and Queen of Hearts returns an array of [S6,HQ]", () => {

        var deck = [["SPADES", "6"], ["HEARTS", "Q"]];

        var result = prepareDeckForDisplay(deck);

        expect(result).toStrictEqual(["S6", "HQ"]);
    });

})

describe("Utilities Tests for compare deck method", () => {

    test("22/22 returns draw", () => {

        var result = compareDecks(22, 22);

        expect(result).toStrictEqual(["draw", 0]);
    });

    test("21/21 returns draw", () => {

        var result = compareDecks(21, 21);

        expect(result).toStrictEqual(["draw", 0]);
    });

    test("22/20 returns player 2 win", () => {

        var result = compareDecks(22, 20);

        expect(result).toStrictEqual(["win", 2]);
    });

    test("20/22 returns player 1 win", () => {

        var result = compareDecks(20, 22);

        expect(result).toStrictEqual(["win", 1]);
    });

    test("21/20 returns player 1 win", () => {

        var result = compareDecks(21, 20);

        expect(result).toStrictEqual(["win", 1]);
    });

    test("20/21 returns player 2 win", () => {

        var result = compareDecks(20, 21);

        expect(result).toStrictEqual(["win", 2]);
    });

    test("15/17 returns deal card to player 1", () => {

        var result = compareDecks(15, 17);

        expect(result).toStrictEqual(["card", 1]);
    });

    test("17/15 returns deal card to player 2", () => {

        var result = compareDecks(17, 15);

        expect(result).toStrictEqual(["card", 2]);
    });

    test("14/15 returns deal cards to both players (player 1 first)", () => {

        var result = compareDecks(14, 15);

        expect(result).toStrictEqual(["card", 1]);
    });

    test("17/20 returns player 2 win", () => {

        var result = compareDecks(17, 20);

        expect(result).toStrictEqual(["win", 2]);
    });

    test("20/17 returns player 1 win", () => {

        var result = compareDecks(20, 17);

        expect(result).toStrictEqual(["win", 1]);
    });

    test("18/18 returns draw", () => {

        var result = compareDecks(18, 18);

        expect(result).toStrictEqual(["draw", 0]);
    });

    test("21/15 returns deal card to player 2", () => {

        var result = compareDecks(21, 15);

        expect(result).toStrictEqual(["card", 2]);
    });

    test("15/21 returns deal card to player 1", () => {

        var result = compareDecks(15, 21);

        expect(result).toStrictEqual(["card", 1]);
    });

    test("21/18 returns player 1 win", () => {

        var result = compareDecks(21, 18);

        expect(result).toStrictEqual(["win", 1]);
    });

    test("18/21 returns player 2 win", () => {

        var result = compareDecks(18, 21);

        expect(result).toStrictEqual(["win", 2]);
    });

    test("Passing non numeric values throws error", () => {
        expect(() => {
            compareDecks("ab", "cd");
        }).toThrow("Card data error");
    });

    test("Passing non integer throws error", () => {
        expect(() => {
            compareDecks(1.23, 4.56);
        }).toThrow("Card data error");
    });

})
