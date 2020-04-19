import { Sync } from './Sync';
import { Eventing } from './Eventing';
import { Attributes } from './Attributes';

export interface UserProps {
  id?: number;
  name?: string;
  age?: number;
}

const rootUrl = 'http://localhost:3000/users';

export class User {
  public sync: Sync<UserProps> = new Sync<UserProps>(rootUrl);
  public events: Eventing = new Eventing();
}
