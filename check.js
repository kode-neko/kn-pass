function encode() {
  return console.log('encode');
}
function encodeCustom(pass) {
  return console.log('encodeCustom');
}
function decode(pass, salt, hash) {
  return console.log('decode');
}
function createToken(pass, user, secret) {
  return console.log('createToken');
}
function checkToken(token, secret) {
  return console.log('checkToken');
}

export {
  encode,
  encodeCustom,
  decode,
  createToken,
  checkToken
}