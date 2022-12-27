# Hangman Game

This is a Hangman game built with React and TypeScript.

## Technologies

* React: A JavaScript library for building user interfaces.
* TypeScript: A typed superset of JavaScript that compiles to plain JavaScript.

## API

The game uses the following API to fetch a random word for the player to guess:

* [api-ninjas Random Word API](https://api-ninjas.com/documentation/random-word-api)

The API requires an API key, which is provided in the code as `"Sk2GSQKcKvc62KGl06WFRA==GKbiCPsun8AwHYIO"`.

## Logic

We fetch the random word whenever User click the button "Play".

After the word is fetched, it will be displayed on the screen as the set of underscores separated by white spaces ("_ _ _ _ _").

The user will now have access to the input field, where he/she will enter a character he/she thinks is the correct one.

**Note: User will only be able to enter ONE character [a-z][A-Z].**

**Note: If user entered a character, he/she will not be able to enter the same character again.**

If the random word indeed contains the character, it will be displayed instead of an underscore.

If the random word doesn't contain the character, one part of a Hangman will appear on the podium.

In total, User will have 6 chances to guess the random word.

After 6 misses, the Hangman will be fully displayed and a screen with "You Lost!" message will be displayed.

If the User guesses the random word, he/she will be able to move on to the next level.

**Note: If the User guesses a character and this character is present in this word multiple times, all occurrences will be displayed.**

---
