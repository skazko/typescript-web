import { View } from './View';
import { User, UserProps } from '../models/User';

export class UserShow extends View<User, UserProps> {
  template() {
    return `
    <h1>User information</h1>
    <div>User name: ${this.model.get('name')}</div>
    <div>User age: ${this.model.get('age')}</div>
    `;
  }
}
