import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { HOME_PAGE_FEATURE_KEY } from './store/state';
import { homeReducers } from './store/home-reducers';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { HomePageEffects } from './store/home-page.effects';
import { PostsModule } from '../post/posts.module';

@NgModule({
  declarations: [HomeComponent, PostThumbnailComponent],
  exports: [
  ],
  imports: [
    StoreModule.forFeature(HOME_PAGE_FEATURE_KEY, homeReducers),
    EffectsModule.forFeature([HomePageEffects]),
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    PostsModule

  ]
})
export class HomeComponentModule {}
