import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const LoadUser = createAction(
    '[User  Actions] Load User',
    props<{ id: string }>()
  );

export const SucessLoadUser = createAction(
    '[User Actions] SuccessLoadUser',
    props<{ user: Usuario }>()
  );

export const ErrorLoadUser = createAction(
    '[User Actions] ErrorLoadUser',
    props<{ payload: any }>()
  );

export const DeleteUser = createAction(
    '[User  Actions] Load User',
    props<{ id: string }>()
  );

export const SucessDeleteUser = createAction(
    '[User Actions] SucessDeleteUser',
  );

export const ErrorDeleteUser = createAction(
    '[User Actions] ErrorDeleteUser',
    props<{ payload: any }>()
  );
