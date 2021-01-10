import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';
import { USER_FEATURE_KEY } from './store/state';
import { StoreModule } from '@ngrx/store';
import { userReducer } from './store/user.reducer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserEffects } from './store/user.effects';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [UserComponent],
  exports: [
  ],
  imports: [
    StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
    EffectsModule.forFeature([UserEffects]),
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule,
    FormsModule
  ],
  providers: [
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}}
  ]
})
export class UserModule {}
