import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/interfaces/person';
import { AppToastService } from 'src/app/services/app-toast.service';
import { UserService } from 'src/app/services/user.service';
import { defaultRouteAnimation } from 'src/app/shared/animations';

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  animations: [defaultRouteAnimation]
})
export class ProfileComponent implements OnInit {

  currentUser?: Person;

  constructor(private userService: UserService, private toastService: AppToastService) { }

  ngOnInit(): void {
    this.currentUser = this.userService.getUserInfo();
  }

  onUserInfoSaved(person: Person): void {
    this.userService.saveUserInfo(person);
    this.toastService.showStandard('Sucesso', 'Dados salvos com sucesso.');
  }

}
