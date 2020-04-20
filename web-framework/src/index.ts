import { User } from './models/User';
import axios from 'axios';

const user = User.buildUser({ id: 1, name: 'Almamed' });
user.on('save', () => console.log('User is fetched(changed) and update HTML'));
user.save();
console.log(user);
