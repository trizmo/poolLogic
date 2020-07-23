module.exports = function (app) {
  // MAILER
  const mailer = require("./api/mailer")
  app.use('/api/mailer', mailer)

}