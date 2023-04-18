import bcrypt from "bcrypt";
import randomatic from "randomatic";
import {default as jwt} from "jsonwebtoken";
import {generateKeySync} from "node:crypto";

function opCreateKey(length) {
  const key = generateKeySync("aes", {length}).export().toString("hex");
  return {key};
}

function opCreatePass(length) {
  const pass = randomatic("Aa0!", length);
  return {pass};
}

function opCreateHash(length) {
  const pass = randomatic("Aa0!", length);
  const salt = bcrypt.genSaltSync(length);
  const hash = bcrypt.hashSync(pass, salt);
  return {pass, salt, hash};
}

function opCreateHashCustom(pass) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(pass, salt);
  return {pass, salt, hash};
}

function opCheckHash(pass, hash) {
  console.log(hash);
  const isPass = bcrypt.compareSync(pass, hash);
  return {isPass};
}

function opCreateToken(user, secretKey) {
  const token = jwt.sign({user}, secretKey, {expiresIn: 1 * 60 * 60 * 1000});
  return {token};
}

function opCheckToken(token, secretKey) {
  const isVerify = jwt.verify(token, secretKey);
  return {isVerify};
}

export {
  opCreateKey,
  opCreatePass,
  opCreateHash,
  opCreateHashCustom,
  opCheckHash,
  opCreateToken,
  opCheckToken,
};
