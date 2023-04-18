import figlet from "figlet";
import chalk from "chalk";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {Params, ParamsConfig} from "./params.js";
import {
  opCreateKey,
  opCreatePass,
  opCreateHash,
  opCreateHashCustom,
  opCheckHash,
  opCreateToken,
  opCheckToken,
} from "./operations.js";

function title() {
  console.log(
    chalk.bold.green(
      figlet.textSync("KnPass", {
        font: "DOS Rebel",
        horizontalLayout: "default",
        verticalLayout: "default",
      })
    )
  );
}

function print(title, infoList) {
  // console.log(chalk.bgGreen(title + "\n"));
  console.log(title + "\n");
  Object.keys(infoList).forEach((key) => console.log(key, "\t", infoList[key]));
}

function getArguments() {
  const argsv = yargs(hideBin(process.argv))
    .locale("en")
    // Operations
    .option(Params.CREATE_KEY, ParamsConfig[Params.CREATE_KEY])
    .option(Params.CREATE_PASS, ParamsConfig[Params.CREATE_PASS])
    .option(Params.CREATE_HASH, ParamsConfig[Params.CREATE_HASH])
    .option(Params.CREATE_HASH_CUSTOM, ParamsConfig[Params.CREATE_HASH_CUSTOM])
    .option(Params.CHECK_HASH, ParamsConfig[Params.CHECK_HASH])
    .option(Params.CREATE_TOKEN, ParamsConfig[Params.CREATE_TOKEN])
    .option(Params.CHECK_TOKEN, ParamsConfig[Params.CHECK_TOKEN])
    // Options
    .options(Params.ROUNDS, ParamsConfig[Params.ROUNDS])
    .options(Params.LENGTH, ParamsConfig[Params.LENGTH])
    .options(Params.USERNAME, ParamsConfig[Params.USERNAME])
    .options(Params.PASS, ParamsConfig[Params.PASS])
    .options(Params.HASH, ParamsConfig[Params.HASH])
    .options(Params.SECRET_KEY, ParamsConfig[Params.SECRET_KEY])
    .options(Params.TOKEN, ParamsConfig[Params.TOKEN]).argv;
  return argsv;
}

function operation(args) {
  const {
    // Operations
    createKey,
    createPass,
    createHash,
    createHashCustom,
    checkHash,
    createToken,
    checkToken,
    // Options
    rounds,
    length,
    username,
    pass,
    hash,
    secretKey,
    token,
  } = args;

  let title;
  let msj;

  // createKey
  if (createKey) {
    title = "Create 🐣 Random Key 🗝️";
    msj = opCreateKey(length);
    // createPass
  } else if (createPass) {
    title = "Create 🐣 Random Pass 🤐";
    msj = opCreatePass(length);
    // createHash
  } else if (createHash) {
    title = "Create 🐣 Random Pass 🤐  Hash ㊙️";
    msj = opCreateHash(length);
    // createHashCustom
  } else if (createHashCustom && pass) {
    title = "Create 🐣 Salt 🧂 Hash ㊙️";
    msj = opCreateHashCustom(pass);
    // checkHash
  } else if (checkHash && pass && hash) {
    title = "Check ✅ Hash ㊙️";
    msj = opCheckHash(pass, hash);
    // createToken
  } else if (createToken) {
    title = "Create 🐣 Token 🏷️";
    msj = opCreateToken(username, secretKey);
    // checkToken
  } else if (checkToken) {
    title = "Check ✅ Token 🏷️";
    msj = opCheckToken(token, secretKey);
    // Error...
  } else {
    title = "";
    msj = {
      err: 'There was a problem 😱 Pelease use "help" option to follow teh indications 🦄',
    };
  }

  print(title, msj);
}

function init() {
  title();
  const args = getArguments();
  operation(args);
}

init();
