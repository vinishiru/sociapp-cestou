import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'form-user-info',
  templateUrl: './form-user-info.component.html',
  styleUrls: ['./form-user-info.component.css']
})
export class FormUserInfoComponent implements OnInit {

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor() {

  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }

}
