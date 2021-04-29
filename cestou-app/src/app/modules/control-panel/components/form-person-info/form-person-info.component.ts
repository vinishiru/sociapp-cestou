import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/interfaces/person';

@Component({
  selector: 'form-person-info',
  templateUrl: './form-person-info.component.html',
  styleUrls: ['./form-person-info.component.css']
})
export class FormPersonInfoComponent implements OnInit {

  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() userInfo?: Person;

  @Output() userInfoSaved = new EventEmitter<Person>();

  personForm = new FormGroup({
    ssn: new FormControl('', Validators.required),
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    birthDate: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email]),
    phoneNumber: new FormControl('')
  });

  constructor() {
  }

  ngOnInit(): void {
    if (this.userInfo)
      this.personForm.setValue(this.userInfo);
  }

  onSubmit(): void {

    if (this.userInfoSaved)
      this.userInfoSaved.emit(this.personForm.value);
  }

  get firstName() { return this.personForm.get('firstName'); }

}
