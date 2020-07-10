import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from '../actions/user.actions';
import { Usuario } from 'src/app/models/usuario.model';

export interface UserState {
    id: string;
    user: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
}

export const userInitialState: UserState  = {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null,
};

const userReducer = createReducer(userInitialState,
  on(UserActions.LoadUser, (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
  on(UserActions.SucessLoadUser, (state, {  user }) => ({
       ...state,
       loading: false,
       loaded: true,
       user: { ...user }
    })),
  on(UserActions.ErrorLoadUser, (state,  { payload } ) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
     })),
  on(UserActions.DeleteUser, (state, { id }) => ({
        ...state,
        loading: true,
        id
    })),
  on(UserActions.SucessDeleteUser, (state ) => ({
        ...state,
        loading: false,
        loaded: true,
        user: null
     })),
  on(UserActions.ErrorDeleteUser, (state,  { payload } ) => ({
         ...state,
         loading: false,
         loaded: false,
         error: payload
      }))
);

export function UserReducer(state, action) {
  return userReducer(state, action);
}

