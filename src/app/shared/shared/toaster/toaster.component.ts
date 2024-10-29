import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../url/notification.service';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css']
})
export class ToasterComponent  {

 

  
  constructor(private notificationService: NotificationService) {}

  triggerSuccess() {
    this.notificationService.showSuccess('Operation successful!', 'Success');
  }

  triggerError() {
    this.notificationService.showError('Something went wrong!', 'Error');
  }

  triggerInfo() {
    this.notificationService.showInfo('This is an info message.', 'Info');
  }

  triggerWarning() {
    this.notificationService.showWarning('This is a warning!', 'Warning');
  }
}

