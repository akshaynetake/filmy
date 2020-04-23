import { Component, OnInit, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @ViewChild('slickModal') slickModal: SlickCarouselComponent;

  slides = [
    {img: "http://placehold.it/350x150/000000",id:0,isTitleVisible:true},
    {img: "http://placehold.it/350x150/111111",id:1,isTitleVisible:true},
    {img: "http://placehold.it/350x150/333333",id:2,isTitleVisible:true},
    {img: "http://placehold.it/350x150/666666",id:3,isTitleVisible:true},
    {img: "http://placehold.it/350x150/333333",id:4,isTitleVisible:true},
    {img: "http://placehold.it/350x150/666666",id:5,isTitleVisible:true}
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "loop":true,
    "speed": 400,
    "swipe": false,
    "centerMode":true,
    "centerPadding": '0px',
    "dots": false,
    // "prevArrow": false,
    // "nextArrow": false

  };
  movieconfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "infinite": false,
    "loop":false,
    "speed": 400,
    "swipe": true,
    "centerPadding": '0px',
    "dots": false,
    "prevArrow": false,
    "nextArrow": false
  };

  constructor() { }

  ngOnInit() {
  }

  sliderHoverEntered(div : string){
    console.log("mouse enter : " + div);
    this.slides[div]['isTitleVisible'] = false
 }

 sliderHoverLeave(div : string){
  console.log('mouse leave :' + div);
  this.slides[div]['isTitleVisible'] = true
}


// id="slide['id']" (mouseenter) ="sliderHoverEntered(slide['id']) " (mouseleave) ="sliderHoverLeave(slide['id'])"

}
