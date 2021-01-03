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
import { GuestBookFormComponent } from './guest-book-form/guest-book-form.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';


const routes: Routes = [
  { path: '', component: GuestBookComponent }
];

@NgModule({
  declarations: [GuestBookComponent, GuestBookFormComponent],
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
    MatDialogModule,
    MatPaginatorModule,
  ],
  providers: [GuestBookService],
  entryComponents: [GuestBookFormComponent]

})
export class GuestBookModule {}
