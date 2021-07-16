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
const buildDevLogger = () => {
  return createLogger({
    format: combine(
      label({
        label: 'application error in dev'
      }),
      timestamp({
        format: "DD-MM-YYYY HH:mm:ss"
      }),
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

      new transports.Console({
        level: 'silly'
      })

    ],
  })
}
module.exports = buildDevLogger;