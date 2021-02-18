if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const sgMail = require('@sendgrid/mail');
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  const htmlEmail = `
  <style>
  .title{
    color: grey;
  }
  </style>
  <h1 className='title' >Welcome to Cuenta</h1>
  <div>Thank you ${name} for signing up for cuenta services</div>
  `;
  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Thanks for signing up!',
    text: `Hi ${name}! Welcome to Cuenta!`,
    html: htmlEmail
  });
};

const forgotPasswordEmail = (email, token) => {
  const htmlEmail = `
  <div>Click the link below to reset your password</div>
  <a target="_blank" rel="noopener noreferrer" href="${process.env.APP_URL}/api/password/${token}">Reset Password</a>
  `;

  sgMail.send({
    to: email,
    from: `${process.env.FROM_EMAIL}`,
    subject: 'Reset Password',
    text: `Hi ${name}! Please click the link below to reset your password.`,
    html: htmlEmail
  });
};
module.exports = {
  sendWelcomeEmail,
  forgotPasswordEmail
};
