"use strict";

const {Sequelize} = require("sequelize");

class MariaDBConnection {

    getConnection(config) {

        const connection = new Sequelize(`${config.db}://${config.user}:${config.pass}@${config.host}:${config.port}/${config.dbName}`);

        return connection;
    }

    async testConnection(connection) {
        try {
            await connection.authenticate();
            console.log("Connected to database");

        } catch (error) {
            console.error(error);
            throw "Error connecting to database. Check the '.env' file";
        }
    }
}

module.exports = MariaDBConnection;