import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-password',
  templateUrl: './form-password.component.html',
  styleUrls: ['./form-password.component.css']
})
export class FormPasswordComponent implements OnInit {

  passwordFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup() {
    this.passwordFormGroup = this.fb.group({
      password: ['', Validators.required],
      passwordConfirmation: ['', Validators.required]
    });

    return this.passwordFormGroup;
  }

}
