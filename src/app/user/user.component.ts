import { Component, OnInit } from '@angular/core';
import { AppState } from '../store/reducers';
import { Store } from '@ngrx/store';
import { UserService } from '../shared/services/user.service';
import { Observable } from 'rxjs';
import { UserModel } from '../shared/model/model';
import { selectUserModel } from './store/user.selectors';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userModel$: Observable<UserModel>;



  constructor(
    private service: UserService,
    private store: Store<AppState>,
     ) {

  }
    public ngOnInit(): void {
    this.userModel$ = this.store.select(selectUserModel);






      }


}
