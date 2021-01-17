import { TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GuestBookDialogComponent } from './guest-book-dialog.component';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { of } from 'rxjs';

describe('Guest book dialog component', () => {
  let component: GuestBookDialogComponent;
  let data;

  const getMockDialogRef = () =>
    ({
      close: jasmine.createSpy('close').and.returnValue(of({data}))
    });


  const getMockDialog = () =>
    ({
      open: jasmine.createSpy().and.returnValue(getMockDialogRef()),
    });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule,
      ],
      providers: [
        GuestBookDialogComponent,
        {
          provide: MatDialog,
          useValue: getMockDialog()
        },
        {
          provide: MatDialogRef,
          useValue: getMockDialogRef()
        }
      ]
    });
    component = TestBed.inject(GuestBookDialogComponent);
  });

  it('should build form on init', () => {
    component.ngOnInit();
    expect(component.form.valid).toBeFalsy();

    const name = component.form.controls['userId'];
    const message = component.form.controls['body'];
    component.form.controls['userId'].setValue('test@test.com');
    component.form.controls['body'].setValue('body');
    expect(component.form.valid).toBeTruthy();
    data = {
      id: '',
      body: 'body',
      title: '',
      userId: 'test@test.com'
    };
    component.onSubmit();
  });

  it('should not submit invalid data', () => {
    component.ngOnInit();
    expect(component.form.valid).toBeFalsy();

    data = {};
    component.onSubmit();
    expect(getMockDialogRef().close).not.toHaveBeenCalled();
  });
});
