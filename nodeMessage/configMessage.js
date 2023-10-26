const nodemailer = require('nodemailer');
//NODE_TLS_REJECT_UNAUTHORIZED='0'

module.exports = (formulario) => {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hanmillibusiness@gmail.com', // Cambialo por tu email
    pass: 'Handy@1990' // Cambialo por tu password
  },
  tls : { rejectUnauthorized: false }
});

const mailOptions = {
  from: `"${formulario.nome}" <${formulario.email}>`,
  to: 'destinatario', // Cambia esta parte por el destinatario
  subject: formulario.assunto,
  html: `
      <strong>Nome:</strong> ${formulario.nome} <br/>
      <strong>E-mail:</strong> ${formulario.email} <br/>
      <strong>Mensagem:</strong> ${formulario.mensagem}
  `
};

transporter.sendMail(mailOptions, function (err, info) {
  if (err)
    console.log(err)
  else
    console.log(info);
});

}
