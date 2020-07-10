import { Action, createReducer, on } from '@ngrx/store';
import * as UsersActions from '../actions/users.actions';
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

const usersReducer = createReducer(UsersInitialState,
  on(UsersActions.LoadUsers, state => ({ ...state, loading: true })),
  on(UsersActions.SucessLoadUsers, (state, { users }) => ({
       ...state,
       loading: false,
       loaded: true,
       users: [... users]
    })),
    on(UsersActions.ErrorLoadUsers, (state,  { payload } ) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
     }))
);

export function UsersReducer(state, action) {
  return usersReducer(state, action);
}

