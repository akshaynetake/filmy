import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {


  slides = [
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/000000"},
    {img: "http://placehold.it/350x150/111111"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
    {img: "http://placehold.it/350x150/333333"},
    {img: "http://placehold.it/350x150/666666"},
  ];
  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "loop":true,
    "speed": 400,
    "swipe": true,
    "centerMode":true,
    "centerPadding": '0px',
    "dots": true,
    "prevArrow": false,
    "nextArrow": false

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

}
