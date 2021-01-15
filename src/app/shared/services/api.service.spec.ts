import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ApiService } from './api-service';
import { mockAllPostsResponse, mockPost, mockPostsResponse } from '../../home/mocks/mocks';
import { HttpClient } from '@angular/common/http';
import { mockCommentsResponse } from '../../comments/mocks/mocks';
import { mockUserModel } from '../../user/mocks/mocks';


describe('ApiService', () => {
  const url = 'https://jsonplaceholder.typicode.com/';
  let service: ApiService;
  let httpMock: HttpTestingController;
  let httpClient: HttpClient;



  beforeEach(
    () => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        providers: [ApiService]
      });
      service = TestBed.inject(ApiService);
      httpMock = TestBed.inject(HttpTestingController);
      httpClient = TestBed.inject(HttpClient);
    });

  it(
    'getFirstFivePosts()',
    () =>  {
      const posts = mockPostsResponse;

      service.getFistFivePosts().subscribe((response) => {
        expect(response).toEqual(posts);
      });
      const req = httpMock.expectOne(url + 'posts/');
      expect(req.request.method).toEqual('GET');
      req.flush(posts);
      httpMock.verify();
    });

  it(
    'getAllPosts()',
    () =>  {
      const posts = mockAllPostsResponse;

      service.getAllPosts().subscribe((response) => {
        expect(response).toEqual(posts);
      });
      const req = httpMock.expectOne(url + 'posts/');
      expect(req.request.method).toEqual('GET');
      req.flush(posts);
      httpMock.verify();
    });

  it(
    'getPost()',
    () =>  {
      const post = mockPost;

      service.getPost(mockPost.id).subscribe((response) => {
        expect(response).toEqual(post);
      });
      const req = httpMock.expectOne(url + 'posts/' + mockPost.id);
      expect(req.request.method).toEqual('GET');
      req.flush(post);
      httpMock.verify();
    });

  it(
    'getComments()',
    () =>  {
      const comments = mockCommentsResponse;
      const postId = mockPost.id;

      service.getComments(postId).subscribe((response) => {
        expect(response).toEqual(comments);
      });
      const req = httpMock.expectOne(url + 'posts/' + mockPost.id + '/comments');
      expect(req.request.method).toEqual('GET');
      req.flush(comments);
      httpMock.verify();
    });

  it(
    'getGuestBookEntries()',
    () =>  {
      const guestBookEntries = mockPostsResponse;

      service.getGuestBookEntries().subscribe((response) => {
        expect(response).toEqual(guestBookEntries);
      });
      const req = httpMock.expectOne(url + 'posts/');
      expect(req.request.method).toEqual('GET');
      req.flush(guestBookEntries);
      httpMock.verify();
    });

  it(
    'addEntry()',
    () =>  {
      const entry = ({ ...mockPost, id: null});

      service.AddEntry(entry).subscribe((response) => {
        expect(response).toEqual(mockPost);
      });
      const req = httpMock.expectOne(url + 'posts/');
      expect(req.request.method).toEqual('POST');
      req.flush(mockPost);
      httpMock.verify();
    });

  it(
    'getUserDetails()',
    () =>  {
      const user = mockUserModel();
      const userId = '10';

      service.getUserDetails(userId).subscribe((response) => {
        expect(response).toEqual(user);
      });
      const req = httpMock.expectOne(url + 'users/' + userId);
      expect(req.request.method).toEqual('GET');
      req.flush(user);
      httpMock.verify();
    });

  // it('should handle errors', () => {
  //   spyOn(service, 'getAllPosts').and.returnValue(of('error'))
  //   });
  //
  // })

  // it('should handle errors', () => {
  //   const twainService = jasmine.createSpyObj('ApiService', ['getAllPosts']);
  //   let getQuoteSpy;
  //   getQuoteSpy = twainService.getQuote.and.returnValue(of(testQuote));
  //
  //
  //   const post = mockPost;
  //   // tslint:disable-next-line:prefer-const
  //   let serviceStub;
  //   // httpRequestSpy = jasmine.createSpyObj('HttpRequest', ['doesNotMatter']);
  //   // httpHandlerSpy = jasmine.createSpyObj('HttpHandler', ['handle']);
  //
  //   spyOn(console, 'log').and.callThrough();
  //
  //   serviceStub = {
  //     getAllPosts: jasmine.createSpy('getAllPosts').and.returnValue(of(post)),
  //   };
  //
  //   spyOn(service.getAllPosts..returnValue(throwError(
  //
  //     'error!'
  //   ));
  //
  //   serviceStub.doStuff().subscribe(
  //
  //     (res) => {
  //
  //     *working test, can access res*
  //     },
  //     (error) => {
  //
  //       console.error(error);
  //       console.log(error);  //Prints 'error!' so throw works.
  //       expect(console.error).toHaveBeenCalledWith('error!'); //Is true but won't be accepted for coverage.
  //     }
  //   );
  //
  //   httpHandlerSpy.handle.and.returnValue(throwError(error));
  //
  //   service.getAllPosts().subscribe((action) => {
  //     err = error;
  //   }
  //   });
  //   const mockService = {
  //     getData: () => {
  //       return of({data: 'any data'});
  //     }
  //   };
  //
  //   spyOn(mockService , 'getData').and.callFake(() => {
  //     return throwError(new Error('Fake error'));
  //   });
  // });
  //
  // it('test error condition', (done) => {
  //   service.getAllPosts().
  //     .subscribe(
  //       null, // you are not interested in the case something is emitted
  //       error => {
  //         expect(error).toEqual('error');
  //         done();
  //       },
  //     )
  // })
});
