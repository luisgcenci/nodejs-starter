//database
require('./config/database').connect();
require('dotenv').config();

//models
// const UserModel = require('./models/User');

//password encryption
// const bcrypt = require('bcryptjs');

//authentication
// const jwt = require('jsonwebtoken');
const auth = require('./middleware/auth')

//app
const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
app.use(cors());
app.use(express.json());

app.get('/checkAuth', auth, (req, res) =>{

    res.json({auth:true});
});

// app.post('/signup', async (req, res) => {

//     const {username, password} = req.body;
//     const passwordEncrypted = await bcrypt.hash(password, 10);

//     const user = new UserModel({
//         username: username,
//         password: passwordEncrypted
//     })

//     const token = jwt.sign(
//         {user_id: user._id, username},
//         process.env.TOKEN_KEY,
//         {
//             expiresIn: '2h',
//         }
//     )

//     user.token = token;

//     user.save(err => {
//         if (err) return res.status(500).send(err);
//         return res.status(200).send(user);
//     })
// })

// app.post('/signin', (req, res) =>{
    
//     const {username, password} = req.body;

//     const comparePassword = (_password, _userPassword) => {
//         bcrypt.compare(_password, _userPassword).then( (correctPassword) => {
//             if (correctPassword) return true;
//             return false;
//         });
//     }

//     const signInWithJWT = (_userid, _username) => {
//         const token = jwt.sign(
//             {
//                 user_id: user._id,
//                 username
//             },
//             process.env.TOKEN_KEY,
//             {
//                 expiresIn: '2h',
//             }
//         );

//         return token;
//     }

//     const send401 = (_message) => {
//         res.status(401).send(_message);
//     }

//     const send501 = (_err) => {
//         res.status(501).send(_err);
//     }

//     try{
//         UserModel.findOne({
//             username: username
//         }, (err, user) =>{

//             if (err) send501(err);

//             if(user){
//                 let correctPassword = comparePassword(password, user.password);
//                 if (correctPassword){

//                     const token = signInWithJWT(user._id, username); 
//                     user.token = token;
//                     res.json({auth: true, token: token});
//                 }
//                 else{
//                     send401('Invalid Email/Password.');
//                 }
//             }else{
//                 send401('Invalid Email/Password.');
//             }
//         });
//     } catch(err){
//         send501(err);
//     }

// });

module.exports = app;




