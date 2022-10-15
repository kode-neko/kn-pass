function encode() {
  return 'encode';
}
function encodeCustom(pass) {
  return 'encodeCustom';
}
function decode(pass, salt, hash) {
  return 'decode';
}
function createToken(pass, user, secret) {
  return 'createToken';
}
function checkToken(token, secret) {
  return 'checkToken';
}

export {
  encode,
  encodeCustom,
  decode,
  createToken,
  checkToken
}