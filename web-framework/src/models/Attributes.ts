export class Attributes<T> {
  constructor(private data: T) {}

  // V 165
  // In TS, strings can be types
  // In JS and TS, all object keys are strings
  get = <K extends keyof T>(key: K): T[K] => {
    return this.data[key];
  };

  set(updateProps: T): void {
    // Object.assign(this.data, updateProps);
    this.data = {
      ...this.data,
      ...updateProps,
    };
  }

  getAll(): T {
    return this.data;
  }
}
