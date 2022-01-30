"use strict";

const MariaDBConnection = require("../../../src/infra/database/MariaDBConnection");

test("Test database connection", async () => {
    const mariadb = new MariaDBConnection();

    const config = {
        db: "mariadb",
        user: "dev",
        pass: "dev",
        host: "localhost",
        port: "3306",
        dbName: "mysql"
    };

    const result = await mariadb.getConnection(config);

    expect(typeof result === "object").toEqual(true);
});