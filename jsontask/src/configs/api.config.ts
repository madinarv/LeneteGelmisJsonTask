import { environment } from './app.config';

export const API = {
  eUserTable: `${environment.apiUsers}`,
  usertable: environment.apiMain + 'users'
}
