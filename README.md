# Random Anonymous Animals

Generate random anonymous animal names.

[![npm](https://img.shields.io/npm/v/random-anonymous-animals)](https://www.npmjs.com/package/random-anonymous-animals)
[![npm-download](https://img.shields.io/npm/dw/random-anonymous-animals)](https://www.npmjs.com/package/random-anonymous-animals)
[![npm](https://img.shields.io/npm/dm/random-anonymous-animals)](https://www.npmjs.com/package/random-anonymous-animals)

## Install

```bash
npm install random-anonymous-animals --save
```

## Example

```js
const randomAnimalName = require("random-anonymous-animals");

/* Generating a random anonymous animal name */
randomAnimalName(); // 'Anonymous Armadillo'
randomAnimalName(); // 'Anonymous Beaver'
randomAnimalName(); // 'Anonymous Penguin'

/* Generating a random anonymous animal name with seed */
randomAnimalName("animal 1"); // 'Anonymous Wolf'
randomAnimalName("animal 2"); // 'Anonymous Turtle'
randomAnimalName("animal 3"); // 'Anonymous Jackalope'
randomAnimalName("animal 1"); // 'Anonymous Wolf', again :-)
```

## Complete List of Animal Names

```js
[
  "alligator",
  "anteater",
  "armadillo",
  "auroch",
  "axolotl",
  "badger",
  "bat",
  "bear",
  "beaver",
  "blobfish",
  "buffalo",
  "camel",
  "chameleon",
  "cheetah",
  "chipmunk",
  "chinchilla",
  "chupacabra",
  "cormorant",
  "coyote",
  "crow",
  "dingo",
  "dinosaur",
  "dog",
  "dolphin",
  "dragon",
  "duck",
  "dumbo octopus",
  "elephant",
  "ferret",
  "fox",
  "frog",
  "giraffe",
  "goose",
  "gopher",
  "grizzly",
  "hamster",
  "hedgehog",
  "hippo",
  "hyena",
  "jackal",
  "jackalope",
  "ibex",
  "ifrit",
  "iguana",
  "kangaroo",
  "kiwi",
  "koala",
  "kraken",
  "lemur",
  "leopard",
  "liger",
  "lion",
  "llama",
  "manatee",
  "mink",
  "monkey",
  "moose",
  "narwhal",
  "nyan cat",
  "orangutan",
  "otter",
  "panda",
  "penguin",
  "platypus",
  "python",
  "pumpkin",
  "quagga",
  "quokka",
  "rabbit",
  "raccoon",
  "rhino",
  "sheep",
  "shrew",
  "skunk",
  "slow loris",
  "squirrel",
  "tiger",
  "turtle",
  "unicorn",
  "walrus",
  "wolf",
  "wolverine",
  "wombat",
];
```

Source: [https://evert.meulie.net/faqwd/complete-list-anonymous-animals-on-google-drive-docs-sheets-slides/](https://evert.meulie.net/faqwd/complete-list-anonymous-animals-on-google-drive-docs-sheets-slides/)
