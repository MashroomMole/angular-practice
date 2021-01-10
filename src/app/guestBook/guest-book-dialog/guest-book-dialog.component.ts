import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-dialog.component.html',
  styleUrls: ['./guest-book-dialog.component.css']
})

export class GuestBookDialogComponent implements OnInit{
 form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private store: Store<AppState>,
    private dialogRef: MatDialogRef<GuestBookDialogComponent>
) {
    this.form = this.fb.group({
    userId: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
    id: '',
    title: '',
    body: ['', Validators.required],
  });
  }

  onSubmit(): void  {
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }
}

  ngOnInit(): void {
  }
}
