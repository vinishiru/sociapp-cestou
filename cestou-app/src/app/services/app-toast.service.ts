import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppToastService {

  toasts: any[] = [];

  constructor() { }

  showStandard(header: string, body: string) {
    this.toasts.push({ header, body });

  }

  showSuccess(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-success text-light', delay: 5000 });
  }

  showDanger(header: string, body: string) {
    this.toasts.push({ header, body, classname: 'bg-danger text-light', delay: 5000 });
  }
  
  remove(toast: any) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
