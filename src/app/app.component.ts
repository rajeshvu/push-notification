import { Component } from '@angular/core';
import { PushNotificationsService } from './push-notifications.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'Browser Push Notifications!';  
  constructor(
    private notificationService: PushNotificationsService) 
    {}
  ngOnInit() {
    this.notificationService.requestPermission(); 
  }

  notify() {  
      let data: Array < any >= [];  
      data.push({  
          'title': 'Notification 1',  
          'alertContent': 'This is First Alert '  
      });  
      data.push({  
          'title': 'Notification 2',  
          'alertContent': 'This is Second Alert'  
      });  
      data.push({  
          'title': 'Notification 3',  
          'alertContent': 'This is Third Alert'  
      });  
      data.push({  
          'title': 'Notification 4',  
          'alertContent': 'This is Fourth Alert'  
      });  
      data.push({  
          'title': 'Notification 5',  
          'alertContent': 'This is Fifth Alert'  
      });  
      this.notificationService.generateNotification(data);  
  }    
}
