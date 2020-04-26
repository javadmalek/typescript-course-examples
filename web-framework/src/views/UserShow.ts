import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserShow extends View<UserProps, User> {
  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name is : ${this.modal.get('name')}</div>
        <div>User age is : ${this.modal.get('age')}</div>
      </div>
    `;
  }
}
