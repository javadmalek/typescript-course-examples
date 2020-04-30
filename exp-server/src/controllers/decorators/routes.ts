import 'reflect-metadata';
import { RequestHandler } from 'express'
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

// export function get(path: string) {
//   // decorator facotry
//   return (target: any, key: string) => {
//     // actual decorator
//     Reflect.defineMetadata('path', path, target, key);
//   };
// }

// Using property descriptor is a way to limit how do we use a decorator
interface RequestHandlerDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBinder(method: string) {
  return (path: string) => {
    // decorator facotry
    return (target: any, key: string, desc: RequestHandlerDescriptor) => {
      // actual decorator
      Reflect.defineMetadata(MetadataKeys.PATH, path, target, key);
      Reflect.defineMetadata(MetadataKeys.METHOD, method, target, key);
    };
  };
}

export const get = routeBinder(Methods.GET);
export const post = routeBinder(Methods.POST);
export const patch = routeBinder(Methods.PATCH);
export const del = routeBinder(Methods.DELETE);
export const put = routeBinder(Methods.PUT);
