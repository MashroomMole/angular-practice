import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { PostsModel } from '../shared/posts.model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-post-thumbnail',
  templateUrl: './post-thumbnail.component.html',
  styles: [`
      .well div {
          color: #bbb;
      }
  `
  ]
})

export class PostThumbnailComponent implements OnInit {
  @Input() public post: PostsModel;
  @Output() public eventClick = new EventEmitter();

  postForm: FormGroup;

  public ngOnInit(): void {
    const title = new FormControl();
    const id = new FormControl();
    const userId = new FormControl();
    const body = new FormControl();
    this.postForm = new FormGroup({
      title,
      id,
      userId,
      body
    });
  }
}


