"use strict";

const MariaDBConnection = require("./MariaDBConnection");
const Env = require("./Env");

const env = new Env();
const config = env.readVariablesAndSetInObjectConfig();

const mariadb = new MariaDBConnection();

module.exports = mariadb.getConnection(config);