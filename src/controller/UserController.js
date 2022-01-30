"use strict";

const UserService = require("../service/UserService");

class UserController {

    async index(req, res) {
        const username = req.params.username;

        const userService = new UserService();

        const result = await userService.getUser();

        let response = {message: `Welcome ${username}.`, result: result};

        return res.status(200).json(response);
    }

}

module.exports = new UserController();