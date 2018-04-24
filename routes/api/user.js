const router = require('express').Router();

const userController = require('../../controllers/user');
const {ensureGuest, ensureAuthenticated} = require('../../libs/auth');
//const nodemailer = require('nodemailer');
/* *** GET ENDPOINTS *** */
router.get('/contact', userController.contact);
router.get('/login', ensureGuest, userController.login);
router.get('/register', ensureGuest, userController.register);
router.get('/logout', ensureAuthenticated, userController.logout);

router.get('/secret', ensureAuthenticated, userController.secret);
/* *** POST ENDPOINTS *** */
router.post('/register', userController.postRegister);
router.post('/login', userController.postLogin);
//router.post('/contact', userController.postContact);
router.post('/send', (req, res) => {
    const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>  
        <li>Name: ${req.body.name}</li>
        <li>Company: ${req.body.company}</li>
        <li>Email: ${req.body.email}</li>
        <li>Phone: ${req.body.phone}</li>
      </ul>
      <h3>Message</h3>
      <p>${req.body.message}</p>
    `;
  
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
      host: 'mail.YOURDOMAIN.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
          user: 'YOUREMAIL', // generated ethereal user
          pass: 'YOURPASSWORD'  // generated ethereal password
      },
      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <your@email.com>', // sender address
        to: 'RECEIVEREMAILS', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world?', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
            return console.log("failed");
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        res.render('view/contact/contact', {msg:'Email has been sent'});
    });
    });
  
// finish -> export
module.exports = router;
