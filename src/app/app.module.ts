import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import { PostsService } from './services/get-posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRouteActivator } from './post-thumbnail/post-route-activator';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PostThumbnailComponent } from './home/post-thumbnail/post-thumbnail.component';
import { PostDetailsComponent } from './post-thumbnail/post-details.component';
import { AppCommentsComponent } from './comments/app-comments.component';
import { HomeComponent } from './home/home.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponentModule } from './home/home.component.module';
import { CommonModule } from '@angular/common';
import { RouterParamSerializer } from './store/router/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: PostThumbnailComponent},
      {path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator] },
      {path: 'posts/:id/comments', component: AppCommentsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      // {path: '/404', component: PageNotFound}
      ]),
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterParamSerializer,
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HomeComponentModule,
  ],
  providers: [
    PostsService,
    PostRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
