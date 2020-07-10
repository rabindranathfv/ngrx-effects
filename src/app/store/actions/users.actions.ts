import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const LoadUsers = createAction('[Users Actions] LoadUsers');

export const SucessLoadUsers = createAction(
    '[Users Actions] SuccessLoadUsers',
    props<{ users: Usuario[] }>()
  );

export const ErrorLoadUsers = createAction(
    '[Users Actions] ErrorLoadUsers',
    props<{ payload: any }>()
  );
