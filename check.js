import bcrypt from 'bcrypt';
import randomatic from 'randomatic';
import { default as jwt } from 'jsonwebtoken';

function encode(length) {
  const pass = randomatic('Aa0!', length);
  const salt = bcrypt.genSaltSync(length);
  const hash = bcrypt.hashSync(pass, salt);
  return { pass, salt, hash }
}
function encodeCustom(pass, length) {
  const salt = bcrypt.genSaltSync(length);
  const hash = bcrypt.hashSync(pass, salt);
  return { pass, salt, hash }
}
function decode(pass, salt, hash) {
  const hashCheck = bcrypt.hashSync(pass, salt);
  const isPass = hash === hashCheck;
  return { isPass }
}
function createToken(user, secret) {
  console.log('create')
  const token = jwt.sign({ user }, secret, { expiresIn: 1 * 60 * 60 * 1000 });
  return { token }
}
function checkToken(token, secret) {
  const isVerify = jwt.verify(token, secret);
  return { isVerify }
}

export {
  encode,
  encodeCustom,
  decode,
  createToken,
  checkToken
}