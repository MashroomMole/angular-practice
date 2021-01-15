import { TestBed } from '@angular/core/testing';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { GuestBookDialogComponent } from './guest-book-dialog.component';

describe('Guest book dialog component', () => {
  let dialogRef: MatDialogRef<GuestBookDialogComponent>;
  let component: GuestBookDialogComponent;
  let formBuilder: FormBuilder;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GuestBookDialogComponent,
        FormBuilder,
        {provide: MatDialogRef, useValue: {dialogRef}},
      ],
    });
    formBuilder = TestBed.inject(FormBuilder);
    dialogRef = TestBed.inject(MatDialogRef);
    component = TestBed.inject(GuestBookDialogComponent);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should build form on init', () => {
    const spy = spyOn(formBuilder, 'group');

    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });
  it('should emit raw value on submit', () => {
    const form = new FormGroup({
      id: new FormControl('1'),
      value: new FormControl('value 1')
    });
    const spy = spyOn(dialogRef, 'close').and.returnValue(form.getRawValue());
    component.onSubmit();
    expect(spy).toHaveBeenCalled();
  });
});
