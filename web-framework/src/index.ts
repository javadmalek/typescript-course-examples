import { User } from './models/User';
import axios from 'axios';

const user = new User({ id: 1, name: 'Jamshid' });
user.on('save', () => console.log('User is fetched(changed) and update HTML'));
user.save();
console.log(user);
