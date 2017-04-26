import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HolaXX app works!';
  userSelected: any;

  onSelected(user: any) {
    this.userSelected = user;
  }

}
