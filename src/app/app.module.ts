import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PostsService } from './services/get-posts.service';
import { ReactiveFormsModule } from '@angular/forms';
import { PostRouteActivator } from './post-thumbnail/post-details/post-route-activator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTabsModule } from '@angular/material/tabs';
import { MaterialModule } from './material/material.module';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { StoreModule } from '@ngrx/store';
import { metaReducers, reducers } from './store/reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppCommentsModule } from './comments/app-comments.module';
import { EffectsModule } from '@ngrx/effects';
import { PostsModule } from './post-thumbnail/posts.module';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeaderComponent,
    NavbarComponent,
    NavigationBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatGridListModule,
    MatTabsModule,
    MatToolbarModule,
    MatCardModule,
    AppCommentsModule,
    PostsModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(),
    !environment.production ? StoreDevtoolsModule.instrument() : []

  ],
  providers: [
    PostsService,
    PostRouteActivator
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
