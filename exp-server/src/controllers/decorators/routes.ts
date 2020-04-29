import 'reflect-metadata';

// export function get(path: string) {
//   // decorator facotry
//   return (target: any, key: string) => {
//     // actual decorator
//     Reflect.defineMetadata('path', path, target, key);
//   };
// }

function routeBinder(method: string) {
  return (path: string) => {
    // decorator facotry
    return (target: any, key: string) => {
      // actual decorator
      Reflect.defineMetadata('path', path, target, key);
      Reflect.defineMetadata('method', method, target, key);
    };
  };
}

export const get = routeBinder('get');
export const post = routeBinder('post');
export const patch = routeBinder('patch');
export const del = routeBinder('delete');
export const put = routeBinder('put');
