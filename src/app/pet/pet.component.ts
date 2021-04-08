import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  pet_name= 'pet';
  pet_img ='https://scontent.fhan3-1.fna.fbcdn.net/v/t1.6435-9/167987486_1728416184010694_2962015504568548256_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=b9115d&_nc_ohc=NqgQxwSdoFEAX-ZwPj3&_nc_ht=scontent.fhan3-1.fna&oh=2877b520521ac891c7bfab39788028d4&oe=6091F84B' ;

  updateNamePet(name){
    this.pet_name = name;
  }

  updateNameIMG(img){
    this.pet_img = img;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
