const Options = {
  ENCODE: 'encode',
  ENCODE_CUSTOM: 'encodeCustom',
  DECODE: 'decode',
  CREATE_TOKEN: 'createToken',
  CHECK_TOKEN: 'checkToken',
  USER: 'user',
  PASS: 'pass',
  HASH: 'hash',
  SALT: 'salt',
  SECRET_TOKEN: 'secret',
  TOKEN: 'token',
  LENGTH: 'length',
}

const OptionsConfig = {
  [Options.ENCODE]: {
    name: 'encode',
    alias: 'e',
    describe: 'Create pass - salt - hash',
    type: 'boolean',
    default: false
  },
  [Options.ENCODE_CUSTOM]: {
    name: 'encodeCustom',
    alias: 'E',
    describe: 'Create salt & hash from pass',
    type: 'boolean',
    default: false
  },
  [Options.DECODE]: {
    name: 'decode',
    alias: 'd',
    describe: 'Check pass - salt - hash are needed',
    type: 'boolean',
    default: false
  },
  [Options.CREATE_TOKEN]: {
    name: 'createToken',
    alias: 't',
    describe: 'Create token from pass - user - secret',
    type: 'boolean',
    default: false
  },
  [Options.CHECK_TOKEN]: {
    name: 'checkToken',
    alias: 'T',
    describe: 'Check token from token - secret',
    type: 'boolean',
    default: false
  },
  [Options.USER]: {
    name: 'user',
    alias: 'u',
    describe: 'Set user',
    type: 'string',
  },
  [Options.PASS]: {
    name: 'pass',
    alias: 'p',
    describe: 'Set de pass',
    type: 'string',
  },
  [Options.HASH]: {
    name: 'hash',
    alias: 'h',
    describe: 'Set the hash',
    type: 'string',
  },
  [Options.SALT]: {
    name: 'salt',
    alias: 's',
    describe: 'Set the salt',
    type: 'string',
  },
  [Options.SECRET_TOKEN]: {
    name: 'secretToken',
    alias: 'S',
    describe: 'Set the secret for token',
    type: 'string',
  },
  [Options.TOKEN]: {
    name: 'token',
    alias: 'k',
    describe: 'Set the token',
    type: 'string',
  },
  [Options.LENGTH]: {
    name: 'length',
    alias: 'l',
    default: 12,
    describe: 'Set the length for teh auto generated pass',
    type: 'number',
  },
}

export {
  Options,
  OptionsConfig
}