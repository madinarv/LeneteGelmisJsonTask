import { UserTableActionTypes, IActivationState } from './types';

const initialState: IActivationState = {
  user: [],
  error: [],
  done: []
};

export const usersReducer = (
  state: IActivationState = initialState,
  action: any,
) => {
  switch (action.type) {
    case UserTableActionTypes.GET_USER_START:
      return {
        ...state,      
      };
    case UserTableActionTypes.GET_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
      };
    case UserTableActionTypes.GET_USER_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};