import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostRouteActivator } from './post-thumbnail/post-details/post-route-activator';
import { PostDetailsComponent } from './post-thumbnail/post-details/post-details.component';
import { AppCommentsComponent } from './comments/app-comments.component';

const routes: Routes = [
  {path: 'posts', component: PostThumbnailComponent},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator] },
  {path: 'posts/:id/comments', component: AppCommentsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'home', component: HomeComponent},

  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
