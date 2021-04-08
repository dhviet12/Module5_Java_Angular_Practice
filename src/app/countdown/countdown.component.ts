import {Component, Input, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {
  time = 10;
  @Input('time')


  // tslint:disable-next-line:typedef
  get second() {
    return this.time;
  }
  set second(value) {
    const v = Number(value);
    this.time = Number.isNaN(v) ? 15 : v;
  }

  startTimer: any;

  // tslint:disable-next-line:typedef
  start() {
    this.startTimer = setInterval(() => {
      this.time --;
      this.isCountDownFinish();
      console.log(this.time);
    }, 500);
  }

  // tslint:disable-next-line:typedef
  stop() {
    clearInterval(this.startTimer);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  // tslint:disable-next-line:typedef
  isCountDownFinish() {
    if (this.time === 0) {
      this.stop();
      this.finish.emit(true);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
