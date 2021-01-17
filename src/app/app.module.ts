import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './shell/about/about.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './shell/header/header.component';
import { NavbarComponent } from './shell/navbar/navbar.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HomeComponentModule } from './home/home.component.module';
import { CommonModule } from '@angular/common';
import { RouterParamSerializer } from './store/router/router';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducers } from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ApiService } from './shared/services/api-service';
import { GuestBookDialogService } from './guestBook/guest-book-dialog-service/dialog-service';
import { AppRoutingModule } from './app-routing.module';

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
    AppRoutingModule,
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
    ApiService,
    GuestBookDialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
