const sub = require('sub');

const candidates = [
  {
    title: '大吉',
    message: 'えらいこってす',
  },
  {
    title: '吉',
    message: 'ぼちぼちでんな',
  },
  {
    title: '末吉',
    message: 'ほなよろしう',
  },
];

const result = sub.pickOmikuji(candidates);
console.log(`結果【${result.title}】 ${result.message}`);
