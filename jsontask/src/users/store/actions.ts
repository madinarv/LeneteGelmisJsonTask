import { container } from "tsyringe";
import { UserTableActionTypes } from "./types";
import { UserTableService } from "../services/users-table.service";
import { TableModel } from "../models/tableModel";
import { IActionCreator } from "../../store/types/store.types";
import { Dispatch } from "redux";

const service = container.resolve(UserTableService);

export const getUserStart = (payload: any): any => ({
  type: UserTableActionTypes.GET_USER_START,
});

export const getUserStartSuccess = (payload: any): any => ({
  type: UserTableActionTypes.GET_USER_SUCCESS,
});

export const getUserFail = (payload: any): any => ({
  type: UserTableActionTypes.GET_USER_FAIL,
});



export const getUserTableDraft: any =
  () => (dispatch: Dispatch<IActionCreator>) => {
    return service
      .getUserTable()
      .then((res) => {
        console.log(res,"res")
          // const items = res.data.legalActs.items.map((item: any) => new TableModel(item));
         
        },
      )
      .then((res) => {
        dispatch(getUserStartSuccess(res));
      })
      .catch((err) => {
        // dispatch(getUserStartFail(res));
      });
  };