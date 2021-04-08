import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-component',
  templateUrl: './color-component.component.html',
  styleUrls: ['./color-component.component.css']
})
export class ColorComponentComponent implements OnInit {
  background = '#00e067';

  onChange(value) {
    this.background = value;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
