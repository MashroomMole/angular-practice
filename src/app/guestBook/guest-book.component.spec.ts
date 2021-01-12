// import { MockStore, provideMockStore } from '@ngrx/store/testing';
// import { AppState } from '../store/reducers';
// import { TestBed } from '@angular/core/testing';
// import { GUEST_BOOK_FEATURE_KEY, guestBookInitialState } from './store/state';
// import { GuestBookComponent } from './guest-book.component';
// import { entriesLoad } from './store/guest-book.actions';
// import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
// import { of } from 'rxjs';
// import { GuestBookDialogComponent } from './guest-book-dialog/guest-book-dialog.component';
//
// describe('Guest book component', () => {
//   let dialogRefSpy = jasmine.createSpyObj({ afterClosed : of({}), close: null });
//   dialogRefSpy.componentInstance = { body: '' };
//
//
//   let component: GuestBookComponent;
//   let store: MockStore<AppState>;
//
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [GuestBookComponent],
//       imports: [MatDialogModule],
//       providers: [
//         { provide: MatDialogRef, useValue: { GuestBookDialogComponent } },
//         GuestBookComponent,
//         provideMockStore({
//           initialState: {
//             [GUEST_BOOK_FEATURE_KEY]: guestBookInitialState,
//           },
//         }),
//       ],
//     }).compileComponents();
//
//     component = TestBed.inject(GuestBookComponent);
//     store = TestBed.inject(MockStore);
//     spyOn(store, 'dispatch');
//   });
//
//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
//
//   it('should dispatch load action', () => {
//     component.ngOnInit();
//     expect(store.dispatch).toHaveBeenCalledWith(entriesLoad());
//   });
//
//   it('should open dialog', () => {
//     component.openDialog();
//     expect(dialogRefSpy).toHaveBeenCalled();
//   });
// });
