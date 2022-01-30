"use strict";

const MariaDBConnection = require("./MariaDBConnection");
const Env = require("./Env");

const env = new Env();
const config = env.readVariablesAndSetInObjectConfig();

const mariadb = new MariaDBConnection();

const connection = mariadb.getConnection(config);
mariadb.testConnection(connection);

module.exports = connection;