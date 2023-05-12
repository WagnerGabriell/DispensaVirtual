const sgMail = require('@sendgrid/mail');
require("dotenv").config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendGridApi = (email) => {
  const msg = {
    to: email,
    from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
    subject: 'Despensa Virtual',
    text: 'Altere a Senha',
    html: '<strong>Altere a Senha</strong>',
  };

  (async () => {
    try{
      await sgMail.send(msg);
    }catch(error){
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    }
  })();
}

module.exports = {
  sendGridApi
}