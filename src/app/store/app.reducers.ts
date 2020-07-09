import { ActionReducerMap } from '@ngrx/store';
import * as Reducers from './reducers/index';


export interface AppState {
    users: Reducers.UsersState;
    user: Reducers.UserState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: Reducers.UsersReducer,
    user: Reducers.UserReducer

};
