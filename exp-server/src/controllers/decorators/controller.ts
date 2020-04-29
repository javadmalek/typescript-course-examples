import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';

export function controller(routePrefix: string) {
  // decorator factory for a class
  return (target: Function) => {
    // actual decorator for a class, target is constructor function
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata('path', target.prototype, key);
      const method = Reflect.getMetadata('method', target.prototype, key);

      if (path && method === 'get') {
        router.get(`${routePrefix}${path}`, routeHandler);
      }
    }
  };
}
