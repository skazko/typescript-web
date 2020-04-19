import { User } from './models/User';

const user = new User({ age: 1, name: 'Another' });

user.on('change', () => {
  console.log('User was changed');
});

user.set({ name: 'Neeeew' });

console.log(user.get('name'));
