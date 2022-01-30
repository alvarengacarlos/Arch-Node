"use strict";

const MariaDBConnection = require("../../../src/infra/database/MariaDBConnection");

test("Test database connection", () => {
    const mariadb = new MariaDBConnection();

    const config = {
        db: "mariadb",
        user: "dev",
        pass: "dev",
        host: "localhost",
        port: "3306",
        dbName: "arch_node"
    };

    const result = mariadb.getConnection(config);

    expect(typeof result === "object").toEqual(true);
});