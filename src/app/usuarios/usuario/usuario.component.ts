import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducers';

import * as userAction from '../../store/actions/user.actions';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  id: any;

  constructor( private router: ActivatedRoute,
               private store: Store<AppState>) { }

  ngOnInit() {
    this.getUserId();
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

}
