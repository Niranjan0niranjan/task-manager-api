const sgMail = require('@sendgrid/mail');

sgMail.setApiKey("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");

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'niranjansaha1081@gmail.com',
    subject: 'Thanks for joining in!',
    text: 'Welcome to the app,' + name +'. Let me know how you get along with the app.'
  })
}

const sendCancelationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'niranjansaha1081@gmail.com',
    subject: 'Good bye',
    text: 'Good bye See you again ' + name 
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancelationEmail
}