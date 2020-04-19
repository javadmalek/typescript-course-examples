import axios, { AxiosResponse } from 'axios';

interface UserProps {
  id?: number;
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

  fetch(): void {
    axios
      .get(`http://localhost:3000/users/${this.get('id')}`)
      .then((response: AxiosResponse): void => {
        this.set(response.data);
      });
  }

  save(): void {
    const id = this.get('id');

    if (id) {
      axios.put(`http://localhost:3000/users/${this.get('id')}`, this.data);
    } else {
      axios.post('http://localhost:3000/users', this.data);
    }
  }
}
