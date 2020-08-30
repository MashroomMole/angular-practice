import { Component, Input, OnInit } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { PostsModel } from '../shared/posts.model';
import { PostsService } from '../services/get-posts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: PostsModel[];
  // tslint:disable-next-line:no-unused-expression
  constructor(private postService: PostsService, private route: ActivatedRoute) { }

  public ngOnInit() {
    this.posts = this.route.snapshot.data['posts'];
  }
}