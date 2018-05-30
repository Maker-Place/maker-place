const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');
const User = require('../models/User');

module.exports = {
  /* *** GET ENDPOINTS *** */
  // login: (req, res) => res.send("login route"),
  // register: (req, res) => res.render('/register'),
      logout: (req, res) => {
        req.logout();
        res.redirect('/home');
      },
  
  //contact us form
  // contact: (req, res) => res.render('contact/contact'),
  // secret: (req, res) => res.render('/secret'),
  /* *** POST ENDPOINTS *** */
  postRegister: (req, res) => {
    let errors = [];
    if (req.body.password != req.body.rpassword)
      errors.push({text: 'Password does not match'});
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
      //check if there is a user with that email
      User.findOne({email: req.body.email})
        .then(user => {
          if (user) {
            errors.push({text: 'User already exist!'});
            console.log("already registered");
            res.status(400).send(errors);
          } else {
            const newUser = new User({
              name: req.body.name,
              email: req.body.email,
              password: req.body.password,
              
            });
            console.log("new user being added");
            console.log(newUser);

            bcrypt.genSalt(10, (err, salt) => {
              bcrypt.hash(newUser.password, salt, (err, hash) => {
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                  .then(user => {
                    res.json({success:true});
                })
                .catch(err => console.log(err));
              });
            });
          }
        });
      }
  },
  postLogin: (req, res, next) => {
    //check if logged in and then run the next function
    passport.authenticate('local')(req,res,next);

 },
 addFavorite: (req, res) => {
    // runs if the user is authenticated
    // find the user by id and add the class id to their favorites
   User.findOneAndUpdate({_id:req.user._id}, { $push: { favorites: req.body.class } }, { new: true })
    .then(function(user) {
      // If the User was updated successfully, send it back to the client
      res.json(user);
    })
    .catch(err => console.log(err))
 },
 getFavorites: (req, res) => {
    res.json(req.user.favorites);
 },
 deleteFavorite: (req, res) => {
  
  User.findOneAndUpdate( {_id:req.user._id}, { $pull: {favorites: req.body.class} }, {new: true})
  .then(function(user) {
    res.json(user);
  })
  .catch(err => console.log(err))
 }
};
