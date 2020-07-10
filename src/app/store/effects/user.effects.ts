import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as userActions from '../actions/user.actions';
import { UsuarioService } from 'src/app/services/usuario.service';

import { tap, mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    constructor( private actions$: Actions,
                 private userService: UsuarioService) { }

    LoadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( userActions.LoadUser ),
            tap( data => console.log('data from tap User effect', data) ),
            mergeMap(
                ( action ) => this.userService.getUserById( action.id )
                        .pipe(
                            map( users => userActions.SucessLoadUser({ user: users }) ),
                            catchError( err => of(userActions.ErrorLoadUser({ payload: { 
                                status: err.status,
                                url: err.url,
                                name: err.name,
                                message: err.message
                            } })))
                        )
            )
        )
    );

    deleteUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( userActions.DeleteUser ),
            tap( data => console.log('data from tap delete User effect', data) ),
            mergeMap(
                ( action ) => this.userService.deleteUserById( action.id )
                        .pipe(
                            map( user => userActions.SucessDeleteUser() ),
                            catchError( err => of(userActions.ErrorDeleteUser({ payload: {
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
