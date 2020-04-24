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
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjVkZDQ1OGUtOTBkYi00YWFjLWFkZGEtN2U4MjIxZjcwZmUzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL50_SY1000_CR0,0,1503,1000_AL_.jpg",
      id: 0,
      isTitleVisible: true,
      movie_title: "Avengers",
      duration:"150min"
    },
    {
      img: "https://images.unsplash.com/photo-1535221540442-5bdde49e727c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Iron man",
      duration:"160min"
    },
    {
      img: "https://images.unsplash.com/photo-1488272690691-2636704d6000?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Thor",
      duration:"92min"
    },
    {
      img: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Doctor Strange",
      duration:"75min"
    },
    {
      img: "https://images.unsplash.com/photo-1520170851591-43094f4d218e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Captain America",
      duration:"118min"
    },
    {
      img: "https://images.unsplash.com/photo-1536982942848-09777d0cd8f0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "KGF",
      duration:"105min"
    },
    {
      img: "https://images.unsplash.com/photo-1519602857797-2d5beada21f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Endgame"
    },
  ];

  slides1 = [
    { img: "http://placehold.it/350x150/000000", id: 0, isTitleVisible1: true },
    { img: "http://placehold.it/350x150/111111", id: 1, isTitleVisible1: true },
    { img: "http://placehold.it/350x150/333333", id: 2, isTitleVisible1: true },
    { img: "http://placehold.it/350x150/666666", id: 3, isTitleVisible1: true },
    { img: "http://placehold.it/350x150/333333", id: 4, isTitleVisible1: true },
    { img: "http://placehold.it/350x150/666666", id: 5, isTitleVisible1: true }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "loop": true,
    "speed": 400,
    "swipe": false,
    "centerMode": true,
    "centerPadding": '0px',
    "dots": false,
    "prevArrow": false,
    "nextArrow": false

  };
  movieconfig = {
    "slidesToShow": 5,
    "slidesToScroll": 1,
    "infinite": false,
    "loop": false,
    "speed": 400,
    "swipe": true,
    // "centerPadding": '0px',
    "dots": false,
    "prevArrow": false,
    "nextArrow": false
  };

  constructor() { }

  ngOnInit() {
  }

  // sliderHoverEntered(div: string) {
  //   console.log("mouse enter : " + div);
  //   this.slides[div]['isTitleVisible'] = false
  // }

  // sliderHoverLeave(div: string) {
  //   console.log('mouse leave :' + div);
  //   this.slides[div]['isTitleVisible'] = true
  // }
  // sliderHoverEntered1(div: string) {
  //   console.log("mouse enter : " + div);
  //   this.slides1[div]['isTitleVisible1'] = false
  // }

  // sliderHoverLeave1(div: string) {
  //   console.log('mouse leave :' + div);
  //   this.slides1[div]['isTitleVisible1'] = true
  // }


  // id="slide['id']" (mouseenter) ="sliderHoverEntered(slide['id']) " (mouseleave) ="sliderHoverLeave(slide['id'])"

  next() {
    this.slickModal.slickNext();
  }

  prev() {
    this.slickModal.slickPrev();
  }

}
