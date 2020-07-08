import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { UsuarioService } from 'src/app/services/usuario.service';

import { tap, mergeMap, map } from 'rxjs/operators';

@Injectable()
export class UserEffects {

    constructor( private actions$: Actions,
                 private userService: UsuarioService) { }

    LoadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( userActions.LoadUsers ),
            tap( data => console.log('data from tap effect', data) ),
            mergeMap(
                () => this.userService.getUsers()
                        .pipe(
                            map( users => userActions.SucessLoadUsers({ users: users}) )
                        )
            )
        )
    );
}
