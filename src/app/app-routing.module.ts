import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { PostsListResolver } from './services/posts-list-resolver';
import { PostThumbnailComponent } from './post-thumbnail/post-thumbnail.component';
import { PostRouteActivator } from './post-details/post-route-activator';
import { PostDetailsComponent } from './post-details/post-details.component';

const routes: Routes = [
  {path: 'posts', component: HomeComponent, resolve: {posts: PostsListResolver }},
  {path: 'posts/:id', component: PostDetailsComponent, canActivate: [PostRouteActivator]},
  {path: 'about', component: AboutComponent},
  {path: '', redirectTo: '/posts', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
