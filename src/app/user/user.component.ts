import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UserModel } from '../shared/model/model';
import { selectUserLoading, selectUserModel, selectUserState } from './store/user.selectors';
import { clearUserModel } from './store/user.actions';
import { UserState } from './store/state';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})

/**
 * UserComponent renders user details pop-up
 * clears user state on destroy
 */
export class UserComponent implements OnInit, OnDestroy {
  public readonly userModel$: Observable<UserModel> = this.store.select(selectUserModel);
  public readonly userState$: Observable<UserState> = this.store.select(selectUserState);
  public readonly loading$: Observable<boolean> = this.store.select(selectUserLoading);

  constructor(
    private store: Store<AppState>
     ) {}

  public ngOnInit(): void {
  }

  public ngOnDestroy(): void {
    this.store.dispatch(clearUserModel());
  }


}
