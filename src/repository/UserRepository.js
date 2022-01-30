"use strict";

const UserSchema = require("../schema/UserSchema");

class UserRepository {

    async getUser() {
        return await UserSchema.findAll();
    }

}

module.exports = UserRepository;