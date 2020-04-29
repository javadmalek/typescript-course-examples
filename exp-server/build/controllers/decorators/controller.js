"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var AppRouter_1 = require("../../AppRouter");
function controller(routePrefix) {
    // decorator factory for a class
    return function (target) {
        // actual decorator for a class, target is constructor function
        var router = AppRouter_1.AppRouter.getInstance();
        for (var key in target.prototype) {
            var routeHandler = target.prototype[key];
            var path = Reflect.getMetadata('path', target.prototype, key);
            var method = Reflect.getMetadata('method', target.prototype, key);
            if (path && method === 'get') {
                router.get("" + routePrefix + path, routeHandler);
            }
        }
    };
}
exports.controller = controller;