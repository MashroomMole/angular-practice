import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostThumbnailComponent } from './post-thumbnail.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { POST_FEATURE_KEY } from './post-details/store/state';
import { AppCommentsModule } from '../comments/app-comments.module';
import { postsReducer } from './post-details/store/posts-reducer';
import { PostEffects } from './post-details/store/post.effects';

@NgModule({
  declarations: [PostThumbnailComponent, PostDetailsComponent],
  exports: [
    PostThumbnailComponent
  ],
  imports: [
    StoreModule.forFeature(POST_FEATURE_KEY, postsReducer),
    EffectsModule.forFeature([PostEffects]),
    CommonModule,
    ReactiveFormsModule,
    AppCommentsModule

  ]
})
export class PostsModule {}
