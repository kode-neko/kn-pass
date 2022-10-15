import figlet from 'figlet';
import chalk from 'chalk';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import {
  Options,
  OptionsConfig
} from './options'

function title() {
  console.log(chalk.bold.green(
    figlet.textSync('KnPass', {
      font: 'DOS Rebel',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    })
  ))
}

function encode() {
  console.log('Create Pass')
}

function decode() {
  console.log('Create Pass')
}

function getArguments() {
  const argsv = yargs(hideBin(process.argv))
    .locale('en')
    .option(Options.ENCODE, OptionsConfig[Options.ENCODE])
    .option(Options.ENCODE_CUSTOM, OptionsConfig[Options.ENCODE_CUSTOM])
    .option(Options.DECODE, OptionsConfig[Options.DECODE])
    .option(Options.CREATE_TOKEN, OptionsConfig[Options.CREATE_TOKEN])
    .option(Options.CHECK_TOKEN, OptionsConfig[Options.CHECK_TOKEN])
    .option(Options.USER, OptionsConfig[Options.USER])
    .option(Options.PASS, OptionsConfig[Options.PASS])
    .option(Options.HASH, OptionsConfig[Options.HASH])
    .option(Options.SALT, OptionsConfig[Options.SALT])
    .option(Options.SECRET_TOKEN, OptionsConfig[Options.SECRET_TOKEN])
    .option(Options.TOKEN, OptionsConfig[Options.TOKEN])
    .argv
  return argsv;
}

function operation(args) {
  console.log(args)
  const {
    enconde, encodeCustom, decode, token,
    user, pass, hash, salt, secretToken
  } = args
}

function init() {
  title();
  const args = getArguments();
  console.log('values', args);
}

init();