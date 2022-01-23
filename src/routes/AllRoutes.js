"use strict";

const userRouterList = require("./UserRoutes");

class AllRoutes {

    constructor() {
        this.allRoutesList = [];
    }

    attachRoute(newRoutesList) {
        this.allRoutesList = [...this.allRoutesList, ...newRoutesList];
    }

    getAllRoutesList() {
        return this.allRoutesList;
    }

}

const routes = new AllRoutes();

routes.attachRoute(userRouterList);

module.exports = routes.getAllRoutesList();