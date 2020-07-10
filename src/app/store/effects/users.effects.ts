import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as usersActions from '../actions/users.actions';
import { UsuarioService } from 'src/app/services/usuario.service';

import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UsersEffects {

    constructor( private actions$: Actions,
                 private userService: UsuarioService) { }

    LoadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.LoadUsers ),
            tap( data => console.log('data from tap effect', data) ),
            mergeMap(
                () => this.userService.getUsers()
                        .pipe(
                            map( users => usersActions.SucessLoadUsers({ users: users }) ),
                            catchError( err => of(usersActions.ErrorLoadUsers({ payload: { 
                                status: err.status,
                                url: err.url,
                                name: err.name,
                                message: err.message
                            } })))
                        )
            )
        )
    );
}
