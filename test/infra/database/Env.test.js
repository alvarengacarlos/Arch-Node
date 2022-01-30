"use strict";

const Env = require("../../../src/infra/database/Env");

test("Test return from config object", () => {
    const env = new Env();

    const config = env.readVariablesAndSetInObjectConfig();

    const object = {
        db: "mariadb",
        user: "dev",
        pass: "dev",
        host: "localhost",
        port: "3306",
        dbName: "arch_node"
    };

    expect(object).toEqual(config);
});

test("Test if error", () => {
    const env = new Env("../");

    expect(() => env.readVariablesAndSetInObjectConfig()).toThrow();
});