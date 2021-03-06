'use strict';

const greet = module.exports = {};

greet.hi = (name) => {
  if(name === '' || typeof name !== 'string')
    return -1;

  return `Hello, ${name}!`;
};

greet.bye = (name) => {
  if(name === '' || typeof name !== 'string')
    return -1;

  return `Goodbye, ${name}!`;
};

function betterBye(){
  console.log('==============================');
}

betterBye();
