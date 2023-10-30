const nodemailer = require('nodemailer');

module.exports = (formulario) => {
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'milliance23@gmail.com', // Cambialo por tu email
    pass: 'azxw oyhm mlnk vjwo' // Cambialo por tu password
  },
  tls : { rejectUnauthorized: false }
});

const mailOptions = {
  from: `"${formulario.nome}" <${formulario.email}>`,
  to: 'milliance23@gmail.com', // Cambia esta parte por el destinatario
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
