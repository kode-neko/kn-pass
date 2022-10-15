import {
  encode,
  encodeCustom,
  decode,
  createToken,
  checkToken
} from './check.js';

const length = 12;
const { pass, salt, hash } = encode(length);
const user = 'test';
const secret = 'test';
const token = createToken(user, secret);

let res;

console.log(encode(length));
// console.log(encodeCustom(pass, length));
// console.log(decode(pass, salt, hash));
console.log(createToken(user, secret));
// console.log(checkToken(token, secret));