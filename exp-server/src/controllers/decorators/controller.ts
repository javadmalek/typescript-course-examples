import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler, Request, Response, NextFunction } from 'express';

function bodyValidators(keys: string): RequestHandler {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      res.status(422);
      res.send('Invalid Request');
      return;
    }

    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422);
        res.send(`Missing ${key}`);
        return;
      }
    }

    next();
  };
}

export function controller(routePrefix: string) {
  // decorator factory for a class
  return (target: Function) => {
    // actual decorator for a class, target is constructor function
    const router = AppRouter.getInstance();

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(
        MetadataKeys.PATH,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) ||
        [];
      const validatorFn = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          ...middlewares,
          validatorFn,
          routeHandler
        );
      }
    }
  };
}
