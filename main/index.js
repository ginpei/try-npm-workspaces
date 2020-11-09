// @ts-check

const sub = require("sub");

/** @type {import('sub').OmikujiResult[]} */
const candidates = [
  {
    title: "Great",
    message: "It will be a great day",
  },
  {
    title: "Nice",
    message: "The day will go nicely.",
  },
  {
    title: "So so",
    message: "You won't feel so bad",
  },
];

const result = sub.pickOmikuji(candidates);
console.log(`Result [${result.title}] ${result.message}`);
