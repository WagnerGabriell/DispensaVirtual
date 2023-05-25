const sgMail = require('@sendgrid/mail');
require("dotenv").config();


sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendGridApi = (email, token) => {
  const msg = {
    to: email,
    from: process.env.EMAIL_FROM, // Use the email address or domain you verified above
    subject: 'Despensa Virtual',
    text: `Altere  sua senha acessando este link http://localhost:3001/alterar-senha/${token}`
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