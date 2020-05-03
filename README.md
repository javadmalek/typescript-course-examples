# Typescript

By definitions
- Typescript = JavaScript + a type system
- TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. 


## What is Typescript type system? 
- Helps us **catch errors during development **
- Uses ‘type annotation’ to **analyze our code**
- **Only active during development.** It is like writing JS code with some documentation.
- **Its compiler doesn’t provide any optimization**. It has no effect of how our code executed by the browser or Node 


## Syntax and features of TS: 
- **Type**: easy way to refer to the different properties + functions that a value has (any value has a type).
  
  **Basic Types** are categorized into two main categories, first is **Primitive Types** which include *(number, string, boolean, symbol, void, undefined and null)*, second one is **Object Types** which include *(arrays, functions, classes and objects)*.
  
  Types are used by TSCompiler to analyze our code for errors and allows the other co-workers to understand which values exist in our codebase. 

- **Type Annotations and Type Inferences for variables**
  
  Keep in mind that, `every variable has a type of value which refers to`. 

  **Type Annotation**: is a code that a developer adds to tell Typescript what type of value a variable refers to. 
  
  **Type Inference**: Typescript tries to figure out what type of value a variable refers to. 

  **Lemma 1**: For Type Inference, if declaration and initialization are the same line, (like `const apples = 5;`), Typescript will figure out the type of variable for us, (here type of variablee would be a number). 
  
  When to use annotations: 
  - Function that returns the `any` type because Typescript can't predict the data type.
  - When we declare a variable in one line and initialize it later.
  - Variables whose type can’t be inferred correctly (not suggested) 

  **Lemma 2**: Type `any` is a type just as ‘string’ or ‘number’ are, which TS has no idea what is that and can't do the error checking. Then Avoid variable type ‘any’ at all costs. 

- **Type Annotations and Type Inferences for function**
  
  **Type Annotation**: is a code that a developer adds to tell Typescript what type of arguments would function receive and what type of values it will return. 
  
  **Type Inference**: Typescript tries to figure out what type of values a function will return. 

- **Type array**: where each element is some consistent type of value 
  - TS can do type inference when extracting values form the array 
  - TS can prevent us adding incompatible values to the array 
  - We can get help from ‘map’, ‘reduce’, ‘forEach’ funcitons
  - Flexible arrays can still contain multiple different types 
  
  Any time that we want to represent a collection of data with some arbitrary sort order, then we will use the type array. 

- **Type Tuple**: is array-like structure where each element represents some properties of a record in a specific order (fixed order). The order of properties should be the same as type declarations. 
  
- Modules system 
- Classes and OOP 


## Interfaces:

- `Interfaces + classes => how we get strong code reuse in TS`
- Which is creating new type, describing the property names and value types of an object. Also, it is possible to define the prototype of functions inside the interface. 
- It should be `named very generic`. 

### Reusable code by interfaces:
A key point is that object should satisfy the interface. it means, object must have at least all the defined keys of the target interface, while object can have many other keys `(object.keys >= interface.keys)`. This is a capability for reusing a code by using a shared interface to describe the shapes of different objects. 

- **Lemma 1**: create functions that accept arguments that are typed with interface (or basic types). 
- **Lemma 2**: objects/classes can decide to implements the given interface to work with a function 


## Type definition(declaration) file
 it is a file that is like an adapter between developer TypeScript code and JavaScript libraries. This file would tell the TSCompiler all the functions are available in JS-Library, what type of values they would take and what types they would return. `(@types/{js-library-name})`

- This also can be used to introduce the global objects and functions around  TS-codebase. 
- Filename should be like `filename.d.ts`
- Donot use the `default export` in TS code, only `export`.



## Classes: 
A Class is a blueprint to create an object with some fields (values) and methods (functions) to represent a thing 

- It has all the OOP features (inheritance, method modifiers such as public, private and protect and etc. 

### Implements:  

- It tells to TS that every instants of following class must satisfy the announced interface. 
- It is a way to extend the class and catch the errors whenever there is a change in an interface.
- It makes a direct dependency between class and interface.
- Sample: `export class User implements Mappable {...}`

### Type Guard: 
It is a check on the type of variables to clarify the type of value we are working on it. Whenever we want to access to set off assets of a type in a union.

- Running a code sniper for a specific type of value.
- Narrow type of value to *primitive types*: 
  - `string, boolean, number, symbol`
  - By using an `if` statement like `if(typeof this.collection === ‘string’){..}`
- Narrow type of value to *any other types*: 
  - Every other value created by constructor function 
  - By using an `if` statement like `if(this.collection instanceof Array) {..}`


### Abstract Class: 
- Can't be used to create any object directly 
- Only used as parent class 
- Can contains real implementation for some methods 
- The implemented methods can refer to other methods which are not implemented yet (we still have to provide the name and return data type) 
- Can make child classes promise to implement some other methods 
- To figure out the abstract functions, ask for which methods would be overridden in the future? 

#### Interface vs Abstract Class: 
- Both would setup a contract between different classes
- Interface would bring loose coupling and abstract would bring strongly coupling
- Interface is useful when classes are very different and abstract vice versa. 
 
 
### Type Assertion: 
Whenever we need to override the TS type. Like `row[5] as MatchResults`.



## Generics in TS: 
When we creating an instance of a class, we would pass an argument of sorts to customize the data value in class. 
- They are like function arguments, but for types in class/function definitions 
- It allows us to define the type of argument/property/return value in the future point
- Used heavily when writing reusable code 
- Traditionally they called like `<T>`


## Inheritance vs composition: 
**Inheritance**: characterized by an `is a` relationship between two classes.
**Composition**: characterized by an `has a` relationship between two classes. 

***Favor composition over class inheritance.***

Spreading objects is a way of doing a composition, but when we are talking about class, the aim of composition is:  **delegating the methods implementation to out of class.** In another words, **it is multiple inheritance**. 

- In case the nested level of decomposition increased, the data accessibility would get harder and harder. Then composition method would break and inheritance would be a better solution.
- If the relation between classes are bidirectional, inheritance is a better idea. 
  
**Lemma**: 
- Using Modal Classes for handling data and represent Users, Blogs, Posts and etc. 
- Using View Classes for handling Html and user’s events like click and etc. 

### How to decompose(options): 
- Extracting the functions to another class and passing an instance of it when you want to make an object of main class
- Defining a static function in main class and creating an instance of main class by passing new class 
- Defining a public property for main class from extracted class 


# TS with JS Libs: 
**Conflict**: TypeScript has a distinct OOP style while many JS libraries are built before JS has any idea of classes and aimed to be functional programming. 
**Solutions**: 
- Use library normally and adding type annotations wherever is possible 
- Using a TS adapter that has helpers for using your libraries 
- Twist your library to work with TS classes 


## Intergradation of TS and JS Middleware: 
- **TS has no idea what is going on inside a JS middleware** like `BodyParser`. For example, BodyParser adds and removes some values of incoming requests/outgoing responses, while TS does not aware of them. 
- By introducing the type declaration file of a middleware library to TS project, there are some default assumptions that if you don’t follow them, there will be wrong conclusion in type checking. **Type definition files provided for us aren’t always accurate**. 
- Inputs to a server are not guaranteed to be always existed and arrived with a correct type.


## Decorators in TS are: 
- Functions that can be used to modify/change different methods/properties/accessors of a class
- not the same as JS decorators
- Used inside/on classes only 
- Understanding the order in which decorators are ran are the key to understanding them 


A Decorator on a property/accessor/method: 
- First argument is the prototype of the object which only stores method’s definitions not more.
- The second argument is the key of the method/accessor/property 
- The third argument is the property descriptor 
- It is for compiling time, not for running time. In another words, Decorators are applied when the code for this class is ran, not when an instance is creates
- A decorator can be customized with decorator factory, which is a function that returns a decorator. 


***Important***: in JS all the initializations of properties of a class are happening in constructor function, which means, by using a decorator around a property definition inside a class, we cannot get a direct access to that property. The reason is the decorator is executed before creating an instance and the arrival argument is just a prototype not actual value. 

- Using property descriptor is a way to limit how do we use a decorator 


## Metadata: 
- Proposed feature to be added to JS and TS has it too.
- Snippets of information can be tied to properties/method/class definition 
- Can be used for super customization cases 
- TS (optionally) will provide type information as Metadata 
- Metadata is a hidden part in an object. 
- Read and written using the `reflect-metadata` package 



# Integrating TS with REACT & Redux 
Pros: 
- Far easier to avoid typos like incorrect actions types
- Giving a far better understanding to dev’s that which type of data coming out from Redux and state 
- Easier to refactoring 

Cons: 
- Type definition files are not trustable specially for Redux 
- Tons of generics flying around
- Tons of import in components 
- Redux inheritably is functional while TS is OOP! 
 

### How to use in React: 
- every class component has a props interface right above it, and make the class a generic class by passing the interface

### Todos in redux: 
- Define a new action 
- Create a new action and its interface in your actions list (action creators)
- If it is aysnc you should use dispatcher, otherwise just return your action and payload
- Update the reducer (add your new reducer) 

 


## Notes: 
- In TS, strings can be types
- In JS and TS, all object keys are strings 

 



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
