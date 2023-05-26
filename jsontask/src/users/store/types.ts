import { TableModel } from "../models/tableModel";

export enum UserTableActionTypes {
  GET_USER_START = 'GET_USER_START',
  GET_USER_SUCCESS = 'GET_USER_SUCCESS',
  GET_USER_FAIL = 'GET_USER_FAIL',
}

export interface IActivationState {
  user: TableModel[];
  error: TableModel[];
  done: TableModel[];
}
