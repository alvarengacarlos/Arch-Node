"use strict";

const express = require("express");
const allRoutesList = require("./routes/AllRoutes");
const httpMethods = require("./utils/httpMethods");

class HttpFramework {

    constructor() {
        this.httpProtocolHandlerFramework = express();
    }

    bindRouteToHttpMethod(allRoutesList) {
        allRoutesList.forEach((routeObject) => {

            switch(routeObject.method) {
                case httpMethods.GET:
                    this.createGetRoute(routeObject);
                    break;
                case httpMethods.POST:
                    this.createPostRoute(routeObject);
                    break;
                case httpMethods.PATCH:
                    this.createPatchRoute(routeObject);
                    break;
                case httpMethods.PUT:
                    this.createPutRoute(routeObject);
                    break;
                case httpMethods.DELETE:
                    this.createDeleteRoute(routeObject);
                    break;
            }

        });
    }

    createGetRoute(routeObject) {
        this.httpProtocolHandlerFramework.get(
            routeObject.path,
            ...routeObject.middleware,
            routeObject.controller
        );
    }

    createPostRoute(routeObject) {
        this.httpProtocolHandlerFramework.get(
            routeObject.path,
            ...routeObject.middleware,
            routeObject.controller
        );
    }

    createPatchRoute(routeObject) {
        this.httpProtocolHandlerFramework.get(
            routeObject.path,
            ...routeObject.middleware,
            routeObject.controller
        );
    }

    createPutRoute(routeObject) {
        this.httpProtocolHandlerFramework.get(
            routeObject.path,
            ...routeObject.middleware,
            routeObject.controller
        );
    }

    createDeleteRoute(routeObject) {
        this.httpProtocolHandlerFramework.get(
            routeObject.path,
            ...routeObject.middleware,
            routeObject.controller
        );
    }

    addMiddlewareToAcceptJson() {
        this.httpProtocolHandlerFramework.use(express.json());
    }

    addMiddlewareToApplication(middleware) {
        this.httpProtocolHandlerFramework.use(middleware);
    }

    init() {
        this.httpProtocolHandlerFramework.listen(3000, () => {
            console.log("Server running...");
        });
    }

}

const httpFramework = new HttpFramework();

httpFramework.bindRouteToHttpMethod(allRoutesList);

module.exports = httpFramework;