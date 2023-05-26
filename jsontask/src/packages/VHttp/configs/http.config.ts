import {environment} from '../../../configs/app.config';

export const HttpConfig = {
  SHOWEXCEPTIONSTACK: String(environment.env) === 'production',
}
