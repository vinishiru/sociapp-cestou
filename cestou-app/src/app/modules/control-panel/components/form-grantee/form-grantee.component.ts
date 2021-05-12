import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Grantee } from 'src/app/interfaces/grantee';
import { GranteeService } from 'src/app/services/grantee.service';
import { defaultRouteAnimation } from 'src/app/shared/animations';
import { FormAddressComponent } from '../form-address/form-address.component';
import { FormPersonInfoComponent } from '../form-person-info/form-person-info.component';

@Component({
  selector: 'form-grantee',
  templateUrl: './form-grantee.component.html',
  styleUrls: ['./form-grantee.component.css'],
  animations: [defaultRouteAnimation]
})
export class FormGranteeComponent implements OnInit {

  @ViewChild(FormPersonInfoComponent, { static: true }) personFormGroup?: FormPersonInfoComponent;
  @ViewChild(FormAddressComponent, { static: true }) addressFormGroup?: FormAddressComponent;

  grantee?: Grantee;
  granteeFormGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private granteeService: GranteeService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.granteeFormGroup = this.fb.group({
      responsiblePerson: this.personFormGroup?.createGroup(),
      address: this.addressFormGroup?.createGroup()
    });

    const id = this.route.snapshot.paramMap.get('id');

    if (id)
      this.grantee = this.granteeService.getGrantee(+id);
    
    if (this.grantee)
      this.granteeFormGroup.patchValue(this.grantee);
  }

  onSubmit(): void {

  }

}
