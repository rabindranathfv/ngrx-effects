import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UsersState {
    users: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const UsersInitialState: UsersState  = {
    users: [],
    loaded: false,
    loading: false,
    error: null,
};

const userReducer = createReducer(UsersInitialState,
  on(UserActions.LoadUsers, state => ({ ...state, loading: true })),
  on(UserActions.SucessLoadUsers, (state, { users }) => ({
       ...state,
       loading: false,
       loaded: true,
       users: [... users]
    })),
    on(UserActions.ErrorLoadUsers, (state,  { payload } ) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
     }))
);

export function UserReducer(state, action) {
  return userReducer(state, action);
}

