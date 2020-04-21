import { User } from './models/User';

const userCollection = User.buildUserCollection();

userCollection.on('change', () => {
  console.log('on change is triggered');
  console.log(userCollection);
});

userCollection.on('error', () => {
  console.log('error is triggered');
});

userCollection.fetch();
