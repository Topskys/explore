
const mongoose=require('mongoose');


const userSchema = new mongoose.Schema({
    username: String,
    author: String,
    createTime:String,
})

const Fans = mongoose.model('fans', userSchema)

module.exports = Fans














// login code in nest.js

// //import the necessary modules
// const passport = require('passport');
// const LocalStrategy = require('passport-local').Strategy;
// const bcrypt = require('bcrypt');
// //import the user model
// const User = require('../models/user');
// //configure passport
// passport.use(new LocalStrategy({
//     usernameField: 'email',
//     passwordField: 'password'
// },
//     (email, password, done) => {
//         User.findOne({ email: email }, (err, user) => {
//             if (err) {
//                 return done(err);
//             }
//             if (!user) {
//                 return done(null, false, { message: 'Incorrect email.' });
//             }
//             bcrypt.compare(password, user.password, (err, isMatch) => {
//                 if (err) {
//                     return done(err);
//                 }
//                 if (isMatch) {
//                     return done(null, user);
//                 } else {
//                     return done(null, false, { message: 'Incorrect password.' });
//                 }
//             });
//         });
//     }
// ));
// //serialize user
// passport.serializeUser((user, done) => {
//     done(null, user.id);
// });
// //deserialize user
// passport.deserializeUser((id, done) => {
//     User.findById(id, (err, user) => {
//         done(err, user);
//     });
// });
// //export passport
// module.exports = passport;

