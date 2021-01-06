import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GuestBookComponent } from './guest-book.component';
import { GUEST_BOOK_FEATURE_KEY } from './store/state';
import { guestBookReducers } from './store/guest-book.reducers';
import { GuestBookEffects } from './store/guest-book.effects';
import { GuestBookService } from '../shared/services/entry.service';
import { GuestBookDialogComponent } from './guest-book-dialog/guest-book-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SharedModule } from '../shared/shared.module';
import { UserModule } from '../user/user.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';


const routes: Routes = [
  { path: '', component: GuestBookComponent }
];

@NgModule({
  declarations: [GuestBookComponent, GuestBookDialogComponent],
  exports: [
  ],
  imports: [
    RouterModule.forChild(routes),
    StoreModule.forFeature(GUEST_BOOK_FEATURE_KEY, guestBookReducers),
    EffectsModule.forFeature([GuestBookEffects]),
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    MatPaginatorModule,
    SharedModule,
    UserModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [GuestBookService]

})
export class GuestBookModule {}
