import express from 'express';

export class AppRouter {
  //  a singleton class for routing, which has only one instance at a time
  private static instance: express.Router;

  static getInstance(): express.Router {
    if (!AppRouter.instance) {
      AppRouter.instance = express.Router();
    }

    return AppRouter.instance;
  }
}
