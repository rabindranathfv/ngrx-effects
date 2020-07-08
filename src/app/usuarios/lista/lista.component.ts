import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import { Usuario } from '../../models/usuario.model';
import * as usersActions from '../../store/actions/user.actions';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styles: []
})
export class ListaComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor( private store: Store<AppState> ) { }

  ngOnInit() {
    this.getUsers();
  }

  /**
   * getUsers
   */
  public getUsers() {
    this.store.dispatch( usersActions.LoadUsers() );
    this.store.select('users').subscribe( ( { users } ) => {
      this.usuarios = users;
    });
  }

}
