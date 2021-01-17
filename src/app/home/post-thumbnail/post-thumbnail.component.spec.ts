import { TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { PostThumbnailComponent } from './post-thumbnail.component';

describe('Post thumbnail component', () => {
  let component: PostThumbnailComponent;
  const mockRouter = {
    navigateByUrl: jasmine.createSpy('navigate')
  };

  beforeEach(
    () => {
      TestBed.configureTestingModule({
        providers: [
          PostThumbnailComponent,
          { provide: Router, useValue: mockRouter},
        ],
      });
      component = TestBed.inject(PostThumbnailComponent);
    }
  );

  it('should trigger router navigation', () => {
    component.navigateToPost('01');
    expect(mockRouter.navigateByUrl).toHaveBeenCalledWith('posts/01');
    });
  });
