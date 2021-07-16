const {
  createLogger,
  format,
  transports
} = require('winston');

const {
  combine,
  timestamp,
  errors,
  json,
  label,
  prettyPrint
} = format;

//custom logger
const buildProdLogger = () => {
  return createLogger({
    format: combine(
      label({
        label: 'application error in prod'
      }),
      timestamp(),
      format.errors({
        stack: true
      }),
      json(),
      prettyPrint()
    ),
    level: 'silly', //log level
    defaultMeta: {
      country: 'india'
    }, //default meta data
    transports: [

      new transports.File({
        level: 'silly',
        filename: `logs.json`,
        format: format.json()
      }),

    ],
  })
}
module.exports = buildProdLogger;