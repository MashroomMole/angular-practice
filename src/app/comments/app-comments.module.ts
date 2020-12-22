import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { POST_COMMENTS_FEATURE_KEY } from './store/state';
import { commentsReducer } from './store/app-comments.reducer';
import { AppCommentsComponent } from './app-comments.component';
import { EffectsModule } from '@ngrx/effects';
import { AppCommentsEffects } from './store/app-comments.effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppCommentsDetailsComponent } from './comments-details/app-comments-details.component';

@NgModule({
  declarations: [AppCommentsComponent, AppCommentsDetailsComponent],
  exports: [
    AppCommentsComponent,
  ],
  imports: [
    StoreModule.forFeature(POST_COMMENTS_FEATURE_KEY, commentsReducer),
    EffectsModule.forFeature([AppCommentsEffects]),
    CommonModule,
    ReactiveFormsModule

  ]
})
export class AppCommentsModule {}
