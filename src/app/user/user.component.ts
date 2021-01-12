import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { ApiService } from '../shared/services/api-service';
import { Observable } from 'rxjs';
import { UserModel } from '../shared/model/model';
import { selectUserModel, selectUserState } from './store/user.selectors';
import { clearUserModel } from './store/user.actions';
import { UserState } from './store/state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

/**
 * UserComponent renders user details pop-up
 * clears user state on destroy
 */
export class UserComponent implements OnInit, OnDestroy {
  userModel$: Observable<UserModel>;
  userState$: Observable<UserState>;

  constructor(
    private service: ApiService,
    private store: Store<AppState>,
     ) {

  }
  public ngOnInit(): void {
    this.userModel$ = this.store.select(selectUserModel);
    this.userState$ = this.store.select(selectUserState);
  }

  public ngOnDestroy(): void {
    this.store.dispatch(clearUserModel());
  }


}
