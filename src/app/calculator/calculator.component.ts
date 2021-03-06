import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  output: number;
  first: number;
  second: number;
  operator = '+';
  // tslint:disable-next-line:typedef
  onFirstChange(value) {
    this.first = Number(value);
  }
  // tslint:disable-next-line:typedef
  onSecondChange(value) {
    this.second = Number(value);
  }
  // tslint:disable-next-line:typedef
  onSelectChange(value) {
    this.operator = value;
  }
  // tslint:disable-next-line:typedef
  calculate() {
    switch (this.operator) {
      case '+':
        this.output = this.first + this.second;
        break;
      case '-':
        this.output = this.first - this.second;
        break;
      case '*':
        this.output = this.first * this.second;
        break;
      case '/':
        this.output = this.first / this.second;
        break;
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
