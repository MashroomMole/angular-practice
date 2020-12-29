import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostDetailsComponent } from './post-details.component';
import { POST_FEATURE_KEY } from './store/state';
import { AppCommentsModule } from '../comments/app-comments.module';
import { postReducer } from './store/post-reducer';
import { RouterModule } from '@angular/router';
import { PostEffects } from './store/post.effects';

@NgModule({
  declarations: [PostDetailsComponent],
  exports: [
  ],
  imports: [
    StoreModule.forFeature(POST_FEATURE_KEY, postReducer),
    EffectsModule.forFeature([PostEffects]),
    CommonModule,
    ReactiveFormsModule,
    AppCommentsModule,
    RouterModule,
  ]
})
export class PostsModule {}
