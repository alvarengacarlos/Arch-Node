"use strict";

class UserController {

    index(req, res) {

        const username = req.params.username;

        res.send(`Welcome ${username}`);
    }

}

module.exports = new UserController();