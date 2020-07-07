import { createAction, props } from '@ngrx/store';
import { Usuario } from 'src/app/models/usuario.model';

export const LoadUsers = createAction('[User Actions] LoadUsers');

export const SucessLoadUsers = createAction(
    '[User Actions] SuccessLoadUsers',
    props<{ users: Usuario[]; }>()
  );

export const ErrorLoadUsers = createAction(
    '[User Actions] ErrorLoadUsers',
    props<{ payload: any; }>()
  );
