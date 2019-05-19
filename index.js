const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post("/api/form", (req, res) => {
  nodemailer.createTestAccount((err, account) => {
    const htmlEmail = `<h3>Contact Details</h3>
      <ul>
          <li>Apellido: ${req.body.lastname}</li>
          <li>Nombre: ${req.body.firstname}</li>
          <li>Correo: ${req.body.email}</li>
          <li>Genero: ${req.body.genero}</li>
        </ul>
        `;

    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "contactoarxpp@gmail.com",
        pass: "Totochoarx420"
      }
    });

    let mailOptions = {
      from: "contactoarxpp@gmail.com",
      to: "contactoarxpp@gmail.com",
      replyTo: "contactoarxpp@gmail.com",
      subject: "Prueba de Correo",
      text: "Este correo es un test",
      html: htmlEmail
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        return console.log(err);
      }

      console.log("Message sent: ");
      console - log("Message URL: %s", nodemailer.getTestMessageUrl(info));
    });
  });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
