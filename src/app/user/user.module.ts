import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user.component';
import { MatDialogModule } from '@angular/material/dialog';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [UserComponent],
  exports: [
  ],
  imports: [
    // StoreModule.forFeature(USER_FEATURE_KEY, userReducer),
    EffectsModule.forFeature([]),
    CommonModule,
    MatDialogModule
  ]
})
export class UserModule {}
