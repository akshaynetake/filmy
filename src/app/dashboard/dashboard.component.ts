import { Component, OnInit, AfterContentInit, ElementRef, ViewChild, HostListener } from '@angular/core';
import { SlickCarouselComponent } from 'ngx-slick-carousel';
declare var $: any;
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
      movie_title: "Endgame",
      duration:"180min"
    },
  ];


  slides2 = [
    {
      img: "https://images.unsplash.com/photo-1535221540442-5bdde49e727c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      id: 0,
      isTitleVisible: true,
      movie_title: "Iron man",
      duration:"160min"
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
      movie_title: "Endgame",
      duration:"180min"
    },
    {
      img: "https://m.media-amazon.com/images/M/MV5BNjVkZDQ1OGUtOTBkYi00YWFjLWFkZGEtN2U4MjIxZjcwZmUzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_QL50_SY1000_CR0,0,1503,1000_AL_.jpg",
      id: 0,
      isTitleVisible: true,
      movie_title: "Avengers",
      duration:"150min"
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
  ];

  slides1 = [
    { title: "Continue Watching", class:"ConW", id: 0, isTitleVisible1: true },
    { title: "Comedy",class:"CoM", id: 1, isTitleVisible1: true }
  ];

  slideConfig = {
    "slidesToShow": 3,
    "slidesToScroll": 1,
    "infinite": true,
    "loop": false,
    "speed": 400,
    "swipe": false,
    "centerMode": true,
    "centerPadding": '0px',
    "dots": false,
    "prevArrow": false,
    "nextArrow": false,
    cssEase: 'ease-in-out',
    touchThreshold: 100

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
    "nextArrow": false,
    cssEase: 'ease-in-out',
    touchThreshold: 100
  };

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
    });
  }

  ngAfterViewInit() {
      for(var i = 0 ; i < this.slides1.length ;i++){
        $('.' + this.slides1[i].class).find('.slick-active').find('.style_prevu_kit').removeClass("right-slide-carousel");
        $('.' + this.slides1[i].class).find('.slick-active').last().find('.style_prevu_kit').addClass("right-slide-carousel");
      }
  }

  afterChange(slidehcangeEvent){
  console.log();
    for(var i = 0 ; i < this.slides1.length ;i++){
      $('.' + this.slides1[i].class).find('.slick-active').find('.style_prevu_kit').removeClass("right-slide-carousel");
      $('.' + this.slides1[i].class).find('.slick-active').last().find('.style_prevu_kit').addClass("right-slide-carousel");
    }
    // $('.sub-carosal  .slick-active').find('.style_prevu_kit').removeClass("right-slide-carousel");
    // $('.sub-carosal  .slick-active').last().find('.style_prevu_kit').addClass("right-slide-carousel");
  }
  // sliderHoverEntered(div: string) {
  //   
  //   this.slides[div]['isTitleVisible'] = false
  // }

  // sliderHoverLeave(div: string) {
  //   
  //   this.slides[div]['isTitleVisible'] = true
  // }
  // sliderHoverEntered1(div: string) {
  //   
  //   this.slides1[div]['isTitleVisible1'] = false
  // }

  // sliderHoverLeave1(div: string) {
  //   
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
