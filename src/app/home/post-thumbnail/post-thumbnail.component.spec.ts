import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PostThumbnailComponent } from './post-thumbnail.component';
import { provideMockRouter } from '../../shared/tests/test.utils';
import { mockPost } from '../mocks/mocks';

describe('Post thumbnail component', () => {
  let component: PostThumbnailComponent;
  let router: Router;

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          PostThumbnailComponent,
          provideMockRouter(),
        ]
      });
      component = TestBed.inject(PostThumbnailComponent);
      router = TestBed.inject(Router);
    }
  );

  it('should trigger router navigation', () => {
    expect(component).toBeTruthy();

    component.navigateToPost(mockPost.id);
    expect(router.navigateByUrl).toHaveBeenCalledWith('../posts/' + mockPost.id);
  });
});
