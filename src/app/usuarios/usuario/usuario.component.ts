import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import * as userAction from '../../store/actions/user.actions';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  id: any;
  user: Usuario;
  loading = false;

  constructor( private router: ActivatedRoute,
               private location: Location,
               private store: Store<AppState>) { }

  ngOnInit() {
    this.getUserId();
    this.loadUser();
  }

  /**
   * getUserId
   */
  public getUserId() {
    this.router.params.subscribe( ({id}) => {
      this.id = id ? id : null;
      this.store.dispatch( userAction.LoadUser( { id: this.id } ) );
    });
  }

  /**
   * loadUser
   */
  public loadUser() {
    this.store.select('user').subscribe( ( { user, loading }) => {
      this.user = user;
      this.loading = loading;
    });
  }

  /**
   * goBack
   */
  public goBack() {
    this.location.back();
  }


}
