import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { Usuario } from '../../models/usuario.model';
import * as usersActions from '../../store/actions/users.actions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];
  loading = false;
  error: any;

  constructor( private store: Store<AppState>,
               private router: Router ) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * getUsers
   */
  public getUsers() {
    this.store.dispatch( usersActions.LoadUsers() );
    this.store.select('users').subscribe( ( { users, loading, error } ) => {
      this.usuarios = users;
      this.loading = loading;
      this.error = error;
    });
  }

  userDetail( id: string ) {

    if ( !id ) {
      return;
    }

    this.router.navigate([ '/usuario', id ]);

  }

}
