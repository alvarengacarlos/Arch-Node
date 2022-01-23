"use strict";

module.exports = (req, res, next) => {

    const username = req.params.username;

    if (username.length <= 3) {
        return res.status(400)
            .send("Username must be greater than 3 characters!");
    }

    next();

};