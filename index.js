const lib = require('google-libphonenumber');

module.exports = (number, country, format) => {

  const util = lib.PhoneNumberUtil.getInstance();
  const PNF = lib.PhoneNumberFormat;

  if ( format === 'e164' ) format = PNF.E164;
  else if ( format === 'nat' ) format = PNF.NATIONAL;
  else if ( format === 'rfc3966' ) format = PNF.RFC3966;
  else format = PNF.INTERNATIONAL;

  try {

    return util.format(util.parse(number, country), format);

  }
  catch (error) {

    return null;

  }

};
