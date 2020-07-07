import { ActionReducerMap } from '@ngrx/store';
import * as Reducers from './reducers/index';


export interface AppState {
    users: Reducers.UsersState;
}

export const appReducers: ActionReducerMap<AppState> = {
    users: Reducers.UserReducer,
};
