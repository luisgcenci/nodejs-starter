const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


module.exports = class UserService{

    //create
    static createUser = async (data) => {

        const username = data.username;
        const password = data.password;

        if (!username || !password) return false;

        const passwordEncrypted = await bcrypt.hash(password, 10);

        try {
            const newUser = User({
                username: username,
                password: passwordEncrypted,
            });

            const token = jwt.sign(
                {user_id: newUser._id, username},
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            )
            
            newUser.token = token;

            const response = await newUser.save();
            return response.token;
        } catch (err){
            console.log(err); 
            return false;
        }
    }

    //read
    static getUser = async (username) => {
        try{
            const user = await User.findOne({username: username});
            return user;
        } catch(err){
            console.log(err);
        }
    }

    //updates
    static updateUsername = async(data) => {
        
        const username = data.username;
        const password = data.password;
        const newUsername = data.newUsername;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        user.username = newUsername;

        const response = await user.save();
        return response;
    }

    static updatePassword = async(data) => {
        
        const username = data.username;
        const password = data.password;
        const newPassword = data.newPassword;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        const newPasswordEncrypted = await bcrypt.hash(newPassword, 10);
        user.password = newPasswordEncrypted;

        const response = await user.save();
        return response;
    }

    //delete
    static deleteUser = async (data) => {
        const username = data.username;
        const password = data.password;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        const response = await User.deleteMany({
            "username": user.username
        });
        
        return response;
    }

    //sign in
    static signInUser = async (data) => {

        const username = data.username;
        const password = data.password;

        const user = await this.credentialsCheck(username, password);

        if (!user) return false;

        try {
            const token = jwt.sign(
                {
                    user_id: user._id,
                    username
                },
                process.env.TOKEN_KEY,
                {
                    expiresIn: '2h',
                }
            );

            user.token = token;
            const response = await user.save();

            return response.token;

        }catch (err){
            console.log(err);
        }

        return false;
    }

    //helpers
    static credentialsCheck = async (username, password) => {

        if (!username || !password) return false;

        const user = await this.getUser(username);

        if (!user) return false;

        const passwordCheck = await this.checkPasswords(user.password, password);

        if (!passwordCheck) return false;

        return user;
    }

    static checkPasswords = async (userPassword, passwordToMatch) => {

        if (!userPassword || !passwordToMatch) return false;

        try{
            const passwordsMatch = await bcrypt.compare(passwordToMatch, userPassword);

            return passwordsMatch;
        }catch(err){
            console.log(err);
        }

        return false;
    }
}