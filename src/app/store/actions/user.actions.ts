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
