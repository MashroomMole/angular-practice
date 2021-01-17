/**
 * Routing module
 */
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PostDetailsComponent } from './post/post-details.component';
import { AppCommentsDetailsComponent } from './comments/app-comments-details.component';
import { AboutComponent } from './shell/about/about.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: 'posts', component: HomeComponent},
    {path: 'posts/:id', component: PostDetailsComponent},
    {path: 'posts/:id/comments', component: AppCommentsDetailsComponent},
    {path: 'about', component: AboutComponent},
    {path: 'home', component: HomeComponent},
    {path: 'guestBook', loadChildren: () => import('./guestBook/guest-book.module').then(m => m.GuestBookModule)},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
