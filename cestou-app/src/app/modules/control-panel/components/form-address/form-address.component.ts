import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'form-address',
  templateUrl: './form-address.component.html',
  styleUrls: ['./form-address.component.css']
})
export class FormAddressComponent implements OnInit {

  @Input() title: string = 'Dados de Endereço';
  @Input() subtitle: string = '';

  addressFormGroup!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }

  createGroup(): FormGroup {
    this.addressFormGroup = this.fb.group({
      zipCode: ['', Validators.required],
      address: ['', Validators.required],
      district: ['', Validators.required],
      complement: [''],
      city: ['', Validators.required],
      state: ['', Validators.required]
    });
    return this.addressFormGroup;
  }

}
