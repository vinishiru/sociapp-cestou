import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'form-person-info',
  templateUrl: './form-person-info.component.html',
  styleUrls: ['./form-person-info.component.css']
})
export class FormPersonInfoComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';

  personFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  createGroup(): FormGroup {
    this.personFormGroup = this.fb.group({
      ssn: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      birthDate: ['', Validators.required],
      email: ['', Validators.email],
      phoneNumber: ['']
    });
    return this.personFormGroup;
  }

  ngOnInit(): void {
  }

}
