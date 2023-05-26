import { container, injectable } from 'tsyringe';
import { API } from '../../configs/api.config';
import {GET} from '../../packages/VHttp/GET'

injectable()

export class UserTableService {
  private _get: GET = container.resolve(GET);

  getUserTable(): Promise<any> {
    return this._get.setApi(API.usertable)
    .requestPromise();
  }
}
