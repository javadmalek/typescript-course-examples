# typescript-course-examples

# Setup an application in TypeScript

- Creating an application with `npm init -y`
- Creating `src` and `build` directories in the root of application
  - Creating a new file `src/index.ts`
- installing new npms for `npm i nodemon concurrently`
- Adding new scripts in packaj.json

```
  "scripts": {
    "start:build": "tsc -w",
    "start:run": "nodemon ./build/index.js",
    "start": "concurrently npm:start:*"
  },
```

- Initializing the TypeScript configuration with `tsc --init`
  - Initialize the params `"outDir": "./build",` and `"rootDir": "./src",`
- running `npm start`
