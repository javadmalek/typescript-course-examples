import { User, UserProps } from '../models/User';
import { View } from './View';

export class UserForm extends View<UserProps, User> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
      'click:.save': this.onSaveUserClick,
    };
  }

  onSaveUserClick = (): void => {
    this.modal.save();
  };

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');

    if (input) {
      const name = input.value;

      this.modal.set({ name });
    }
  };

  onSetAgeClick = (): void => {
    this.modal.setRandomAge();
  };

  template(): string {
    return `
    <div>
      <input placeholder="${this.modal.get('name')}" />
      <button class="set-name">Set Name</button>
      <button class="set-age">Set a Random Age</button>
      <button class="save">Save User</button>
    </div>
    `;
  }
}
