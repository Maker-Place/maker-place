const router = require('express').Router();

const userController = require('../../controllers/user');
const favoriteController = require('../../controllers/Favorites');
const {ensureGuest, ensureAuthenticated} = require('../../libs/auth');

const nodemailer = require('nodemailer');
const xoauth2 = require('xoauth2');

/* *** GET ENDPOINTS *** */
// router.get('/contact', userController.contact);
// router.get('/login', ensureGuest, userController.login);
// router.get('/register', ensureGuest, userController.register);
router.get('/logout', ensureAuthenticated, userController.logout);

// router.get('/secret', ensureAuthenticated, userController.secret);
/* *** POST ENDPOINTS *** */
//if authenticated this sends back the user object
router.get('/checkloggedin', ensureAuthenticated, (req,res) => res.json(req.user));

router.post('/register', userController.postRegister);
//check if logged in, and return true if so
router.post('/login', userController.postLogin, (req,res) => res.json(req.user));
router.get('/favorite/:id', (req,res) => favoriteController.getFavorites(req,res));
router.post('/favorite', ensureAuthenticated, (req,res) => userController.favorite(req, res));

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
    
    let transporter = nodemailer.createTransport({      
        host: "Gmail",
        auth: {
          type: "OAuth2",
          user: "nasehi.arezo@gmail.com",
          clientId: "224847136780-3er5t2rodkmo1ck0vq4vkk6b158rrdon.apps.googleusercontent.com",
          clientSecret: "OQ9Exf2BtwGNXoHkW4V3vbKp",
          refreshToken: "1/hYxAUz483JM1MtpJkDByzWK1bAueqpGwOoPMJ1xBaw"                              
        },
    

      tls:{
        rejectUnauthorized:false
      }
    });
  
    // setup email data with unicode symbols
    let mailOptions = {
        from: '"Nodemailer Contact" <nasehi.amir@gmail.com>', // sender address
        to: 'sheilanasehi@gmail.com', // list of receivers
        subject: 'Node Contact Request', // Subject line
        text: 'Hello world? ', // plain text body
        html: output // html body
    };
  
    // send mail with defined transport object
    // transporter.sendMail(mailOptions, (error, info) => {
    transporter.sendMail(mailOptions, (error, info) => {
        
        if (error) {
            return console.log(error);
            return console.log("failed");
        }
        console.log('Message sent: %s', info.messageId);   
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
   
        res.render('/contact', {msg:'Email has been sent'});
    });
    });
  
// finish -> export
module.exports = router;
