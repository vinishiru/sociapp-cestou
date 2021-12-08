import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from 'src/app/interfaces/person';
import { AppToastService } from 'src/app/services/app-toast.service';
import { UserService } from 'src/app/services/user.service';
import { defaultRouteAnimation } from 'src/app/shared/animations';
import { FormAddressComponent } from '../../components/form-address/form-address.component';
import { FormPersonInfoComponent } from '../../components/form-person-info/form-person-info.component';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [defaultRouteAnimation]
})
export class ProfileComponent implements OnInit {

  @ViewChild(FormPersonInfoComponent, { static: true }) personFormGroup?: FormPersonInfoComponent;
  @ViewChild(FormAddressComponent, { static: true }) addressFormGroup?: FormAddressComponent;


  profileForm!: FormGroup;
  currentUser?: Person;


  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private toastService: AppToastService
  ) { }

  ngOnInit(): void {

    this.profileForm = this.fb.group({
      personInfo: this.personFormGroup!.createGroup(),
      address: this.addressFormGroup!.createGroup()
    });

    this.currentUser = this.userService.getUserInfo();

    if (!this.currentUser)
      return;

    let profileInfo = {
      personInfo: this.currentUser,
      address: this.currentUser.address
    };

    this.profileForm.patchValue(profileInfo);

  }

  onSubmit(): void {
    let person: Person = {
      ...this.profileForm.value.personInfo,
      address: this.profileForm.value.address
    };
    this.userService.saveUserInfo(person);
    this.toastService.showStandard('Sucesso', 'Dados salvos com sucesso.');
  }

}
