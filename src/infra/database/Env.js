"use strict";

const dotEnvLib = require("dotenv");

class Env {

    constructor(path = {path: `${__dirname}/.env`}) {
        this.dotenv = dotEnvLib.config(path);
    }

    readVariablesAndSetInObjectConfig() {
        this.checkForError();

        let config;

        switch (this.dotenv.parsed.DB_CON_MODE) {
            case "PRODUCTION":
                config = {
                    db: this.dotenv.parsed.PROD_DB_DATABASE,
                    user: this.dotenv.parsed.PROD_DB_USER,
                    pass: this.dotenv.parsed.PROD_DB_PASS,
                    host: this.dotenv.parsed.PROD_DB_HOST,
                    port: this.dotenv.parsed.PROD_DB_PORT,
                    dbName: this.dotenv.parsed.PROD_DB_NAME
                };
                break;
            case "DEVELOPMENT":
                config = {
                    db: this.dotenv.parsed.DEV_DB_DATABASE,
                    user: this.dotenv.parsed.DEV_DB_USER,
                    pass: this.dotenv.parsed.DEV_DB_PASS,
                    host: this.dotenv.parsed.DEV_DB_HOST,
                    port: this.dotenv.parsed.DEV_DB_PORT,
                    dbName: this.dotenv.parsed.DEV_DB_NAME
                };
                break;
            case "TEST":
                config = {
                    db: this.dotenv.parsed.TEST_DB_DATABASE,
                    user: this.dotenv.parsed.TEST_DB_USER,
                    pass: this.dotenv.parsed.TEST_DB_PASS,
                    host: this.dotenv.parsed.TEST_DB_HOST,
                    port: this.dotenv.parsed.TEST_DB_PORT,
                    dbName: this.dotenv.parsed.TEST_DB_NAME
                };
                break;
            default:
                throw "Connection mode not found. Check the '.env' file";
        }

        return config;
    }

    checkForError() {
        if (this.dotenv.error) {
            throw this.dotenv.error;
        }
    }
}

module.exports = Env;