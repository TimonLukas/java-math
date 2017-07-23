# java-math
When maths in Javascript are too easy for you.

Have you ever felt that mathematics in JS are a little too much on the easy side?
Do you want a more enterprise-y experience?

Then this library is perfect for you!

## Inspiration
This library was wholly inspired by [Jack Clark](https://github.com/jackdcrawford) and his [five.js](https://github.com/jackdcrawford/five) library.

I really enjoyed the idea, but, as we all know... hardcoding things is not a good practice. So I thought, why not abstract it a little?

## Installation
Normal installation through `npm` or `yarn`:

```shell
yarn add java-math
```

## Usage
When `import`ing the library, you get a factory:

```javascript
const numberFactory = require("java-math");
```

You can now use this to generate numbers:
```javascript
const one = numberFactory("one");
const five = numberFactory("five");
const fortyTwo = numberFactory("forty-two");
const oneHundred = numberFactory("one-hundred");
```

Of course you can use these like any other numbers which are functions but also hold properties!
```javascript
one() + one(); // 2
fortyTwo() * oneHundred(); // 4200
five.factorial(); // 120
```

And if you want to get to the real fun, just try switching things around for a bit!
```javascript
const three = numberFactory("four");
const banana = numberFactory("seven-teen");
```