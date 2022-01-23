"use strict";

class Routes {

    constructor() {
        this.routesList = [];
    }

    addRoute(method, path, controller, middleware = []) {

        if (middleware instanceof Array === false) {
            throw "Middleware must be an array of functions";
        }

        const route = {
            method: method,
            path: path,
            controller: controller,
            middleware: middleware
        };

        this.routesList.push(route);
    }

    getRoutesList() {
        return this.routesList;
    }

}

module.exports = Routes;