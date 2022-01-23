"use strict";

const httpMethods = require("../utils/httpMethods");
const Routes = require("./Routes");
const userController = require("../controller/UserController");
const userMiddleware = require("../validation/userValidation");

class UserRoutes extends Routes {

    constructor() {
        super();
        this.addRoute(httpMethods.GET, "/user/:username", userController.index, [userMiddleware]);
    }

}

const userRoutes = new UserRoutes();

module.exports = userRoutes.getRoutesList();