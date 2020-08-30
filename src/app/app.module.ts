import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostsService } from './services/get-posts.service';
import { PostsListResolver } from './services/posts-list-resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRouteActivator } from './post-details/post-route-activator';
import { PostDetailsComponent } from './post-details/post-details.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavigationBarComponent,
    PostThumbnailComponent,
    PostDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatTabsModule

  ],
  providers: [
    PostsService,
    PostsListResolver,
    PostRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
