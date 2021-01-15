import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-guest-book-form',
  templateUrl: './guest-book-dialog.component.html',
  styleUrls: ['./guest-book-dialog.component.css']
})

/**
 * GuestBookDialogComponent
 * handles new guest book entry dialog
 */
export class GuestBookDialogComponent implements OnInit{
  form: FormGroup;

    constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<GuestBookDialogComponent>
) {}

  public onSubmit(): void  {
    if (this.form.valid) {
      this.dialogRef.close(this.form.getRawValue());
    }
}

  public ngOnInit(): void {
    this.form = this.fb.group({
      userId: ['', [Validators.required, Validators.maxLength(20), Validators.email]],
      id: '',
      title: '',
      body: ['', Validators.required],
    });
  }
}
