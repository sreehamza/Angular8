import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  widthimg: number;
  heightimg: number;

  constructor() { 
    this.widthimg = 50;
    this.heightimg = 50;
  }

  ngOnInit() {
  }

}
