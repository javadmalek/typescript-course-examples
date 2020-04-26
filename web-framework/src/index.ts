import { UserEdit } from './views/UserEdit';
import { User } from './models/User';

const user = User.buildUser({ name: 'Javad', age: 35 });

const rootEl = document.getElementById('rootEl');
if (rootEl) {
  const userEdit = new UserEdit(rootEl, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error('Root element not found.');
}
