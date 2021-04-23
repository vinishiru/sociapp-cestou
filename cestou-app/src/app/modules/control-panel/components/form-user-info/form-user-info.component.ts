import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../../../interfaces/user';
import { AppToastService } from '../../../../services/app-toast.service';
import { UserService } from '../../../../services/user.service';

@Component({
  selector: 'form-user-info',
  templateUrl: './form-user-info.component.html',
  styleUrls: ['./form-user-info.component.css']
})
export class FormUserInfoComponent implements OnInit {

  userInfo?: User;

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  constructor(private userService: UserService, private toastService: AppToastService) {
  }

  ngOnInit(): void {
    this.userInfo = this.userService.getUserInfo();
    this.profileForm.setValue(this.userInfo);
  }

  onSubmit(): void {
    this.userService.saveUserInfo(this.profileForm.value);
    this.toastService.showStandard('Sucesso', 'Dados salvos com sucesso.');
  }

  get firstName() { return this.profileForm.get('firstName'); }

}
