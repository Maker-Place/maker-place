const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

module.exports = {
  /* *** GET ENDPOINTS *** */
  login: (req, res) => res.render('/login'),
  register: (req, res) => res.render('/register'),
  logout: (req, res) => {
    req.logout();
    res.redirect('/home');
  },
  
  //contact us form
  contact: (req, res) => res.render('contact/contact'),
  secret: (req, res) => res.render('/secret'),
  /* *** POST ENDPOINTS *** */
  postRegister: (req, res) => {
    console.log("11");
    let errors = [];

    // if (req.body.password != req.body.rpassword)
    //   errors.push({text: 'Password does not match'});
    if (req.body.password.length < 4)
      errors.push({text: 'Password must be at least 4 characters!'});
    // verify if errors exist
    if (errors.length > 0) {
    
      res.send( {
        errors,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        rpassword: req.body.rpassword
      });
    }  else {
      User.findOne({email: req.body.email})
        .then(user => {
          if (user) {
            errors.push({text: 'User already exist!'});
            console.log("registered");
            res.json(req.body);
          } else {
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              
            });
            console.log(newUser.name);
            console.log('here');
            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    console.log(`User ${user.name} register!`);
                    res.redirect('/login');
                })
                .catch(err => console.log(err));
              });
            });
          }
        });
      }
  },
  postLogin: (req, res) => {
    // This function runs only if the user is logged in.
    res.json({success: true})

 } // Finish
};
