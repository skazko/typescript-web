import { User } from './models/User';

const user = new User({ age: 1, name: 'Another' });

user.events.on('change', () => {
  console.log('Change');
});

user.events.trigger('change');
