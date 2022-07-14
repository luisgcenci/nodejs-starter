const UserService = require('../services/UserService');

module.exports = class UserHelpers{

    static credentialsCheck = async (data) => {

        const username = data.username;
        const password = data.password;

        if (!user || !password) return false;

        const user = await UserService.getUser(username);

        if (!user) return false;

        const passwordCheck = await UserService.checkPasswords(user.password, password);

        if (!passwordCheck) return false;

        return true;
    }
}