"use strict";

const UserRepository = require("../repository/UserRepository");

class UserService {

    async getUser() {
        const userRepository = new UserRepository();

        return await userRepository.getUser();
    }

}

module.exports = UserService;