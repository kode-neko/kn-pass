import bcrypt from 'bcrypt';
import randomatic from 'randomatic';
import jsonwebtoken from 'jsonwebtoken';

function encode(length) {
  const pass = randomatic('Aa0!', length);
  const salt = bcrypt.genSaltSync(12);
  const hash = bcrypt.hashSync(pass, salt);
  return { pass, salt, hash }
}
function encodeCustom(pass) {
  console.log('encodeCustom');
}
function decode(pass, salt, hash) {
  const hashCheck = bcrypt.hashSync(pass, salt);
  const isPass = hash === hashCheck;
  return { isPass }
}
function createToken(pass, user, secret) {
  console.log('createToken');
}
function checkToken(token, secret) {
  console.log('checkToken');
}

export {
  encode,
  encodeCustom,
  decode,
  createToken,
  checkToken
}