"use strict";

const {DataTypes} = require("sequelize");
const connection = require("../infra/database/index");

const User = connection.define("User", {
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

(async () => {
    await User.sync();
})();

module.exports = User;