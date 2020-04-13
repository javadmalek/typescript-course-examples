interface UserProps {
  name?: string;
  age?: number;
}

type CallbackAlias = () => void; // () =>  {};  !!!! TS  would consider the object as return value !!!!!

export class User {
  events: { [key: string]: CallbackAlias[] } = {}; // an array of callbacks for a specific event

  constructor(private data: UserProps) {}

  get(propName: string): string | number {
    return this.data[propName];
  }

  set(updateProps: UserProps): void {
    // Object.assign(this.data, updateProps);
    this.data = {
      ...this.data,
      ...updateProps,
    };
  }

  on(eventName: string, callback: CallbackAlias): void {
    const handlers = this.events[eventName] || [];
    handlers.push(callback);
    this.events[eventName] = handlers;
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers.length === 0) return;

    handlers.forEach((callback) => callback());
  }
}
