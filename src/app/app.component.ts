import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice Angular';
  isFinish = '';
  // tslint:disable-next-line:typedef
  finishCountDown(){
    this.isFinish = 'Done';
  }

}
