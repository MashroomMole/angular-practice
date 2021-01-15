import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './shell/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shell/header/header.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { PostDetailsComponent } from './post/post-details.component';
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
import { AppCommentsDetailsComponent } from './comments/app-comments-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ApiService } from './shared/services/api-service';
import { GuestBookDialogService } from './guestBook/guest-book-dialog-service/dialog-service';

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
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'posts', component: HomeComponent},
      {path: 'posts/:id', component: PostDetailsComponent},
      {path: 'posts/:id/comments', component: AppCommentsDetailsComponent},
      {path: 'about', component: AboutComponent},
      {path: 'home', component: HomeComponent},
      {path: 'guestBook', loadChildren: () => import('./guestBook/guest-book.module').then(m => m.GuestBookModule)},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
    ]),
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    StoreRouterConnectingModule.forRoot({
      serializer: RouterParamSerializer,
    }),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    HomeComponentModule,
    SharedModule,
  ],
  providers: [
    ApiService,
    GuestBookDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
