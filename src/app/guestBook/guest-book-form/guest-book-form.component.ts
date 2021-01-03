import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { createEntry } from '../store/guest-book.actions';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-form.component.html',
})

export class GuestBookFormComponent implements OnInit{
  @Input() hideDialog;
  @Output() save = new EventEmitter<boolean>();

  form = this.fb.group({
    id: '',
    userId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    title: ['', Validators.required],
    body: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private store: Store<AppState>, private dialogRef: MatDialogRef<GuestBookFormComponent>

  ) {}

  onSubmit(): void  {
    this.form.markAsPristine();
    this.form.markAsUntouched();
    this.store.dispatch(
      createEntry({
          entry: this.form.getRawValue(),
        })
      );
    this.save.emit();
    this.form.reset();
    this.dialogRef.close();
}

  ngOnInit(): void {

    // this.form = new FormGroup({
    //   id: new FormControl(''),
    //   userId: new FormControl(''),
    //   email: new FormControl(''),
    //   body: new FormControl('')
    console.log('init');
    // }
  // this.form = this.fb.group({
  //   id: '',
  //   userId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
  //   email: ['', Validators.required],
  //   body: '',
  // });

}
}
