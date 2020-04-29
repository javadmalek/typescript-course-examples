"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
// export function get(path: string) {
//   // decorator facotry
//   return (target: any, key: string) => {
//     // actual decorator
//     Reflect.defineMetadata('path', path, target, key);
//   };
// }
function routeBinder(method) {
    return function (path) {
        // decorator facotry
        return function (target, key) {
            // actual decorator
            Reflect.defineMetadata('path', path, target, key);
            Reflect.defineMetadata('method', method, target, key);
        };
    };
}
exports.get = routeBinder('get');
exports.post = routeBinder('post');
exports.patch = routeBinder('patch');
exports.del = routeBinder('delete');
exports.put = routeBinder('put');
