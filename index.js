import figlet from "figlet";
import chalk from "chalk";
import yargs from "yargs";
import {hideBin} from "yargs/helpers";
import {Options, OptionsConfig} from "./options.js";
import {
  createKey,
  encode as encodeF,
  encodeCustom as encodeCustomF,
  decode as decodeF,
  createToken as createTokenF,
  checkToken as checkTokenF,
} from "./check.js";

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
  console.log(chalk.bgGreen(title + "\n"));
  Object.keys(infoList).forEach((key) => console.log(key, "\t", infoList[key]));
}

function getArguments() {
  const argsv = yargs(hideBin(process.argv))
    .locale("en")
    .option(Options.KEY, OptionsConfig[Options.KEY])
    .option(Options.ENCODE, OptionsConfig[Options.ENCODE])
    .option(Options.ENCODE_CUSTOM, OptionsConfig[Options.ENCODE_CUSTOM])
    // .option(Options.DECODE, OptionsConfig[Options.DECODE])
    .option(Options.CREATE_TOKEN, OptionsConfig[Options.CREATE_TOKEN])
    // .option(Options.CHECK_TOKEN, OptionsConfig[Options.CHECK_TOKEN])
    .option(Options.USER, OptionsConfig[Options.USER])
    .option(Options.PASS, OptionsConfig[Options.PASS])
    .option(Options.HASH, OptionsConfig[Options.HASH])
    .option(Options.SALT, OptionsConfig[Options.SALT])
    .option(Options.SECRET_TOKEN, OptionsConfig[Options.SECRET_TOKEN])
    .option(Options.TOKEN, OptionsConfig[Options.TOKEN])
    .option(Options.LENGTH, OptionsConfig[Options.LENGTH]).argv;
  return argsv;
}

function operation(args) {
  const {
    key,
    encode,
    encodeCustom,
    decode,
    createToken,
    checkToken,
    user,
    pass,
    hash,
    salt,
    secretToken,
    token,
    length,
  } = args;

  let title;
  let msj;

  if (key) {
    title = "Key";
    msj = createKey(length);
  } else if (encode) {
    title = "Encode";
    msj = encodeF(length);
  } else if (encodeCustom && pass) {
    title = "Encode Custom";
    msj = encodeCustomF(pass, length);
  } else if (decode && pass && salt && hash) {
    title = "Decode Pass Salt";
    msj = decodeF(pass, salt, hash);
  } else if (createToken && user && secretToken) {
    title = "Create Token";
    msj = createTokenF(user, secretToken);
  } else if (checkToken && token && secretToken) {
    title = "Check Token";
    msj = checkTokenF(token, secretToken);
  } else {
    title = "";
    msj = {
      err: 'There was a problem. Pelease use "help" option to follow teh indications.',
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
