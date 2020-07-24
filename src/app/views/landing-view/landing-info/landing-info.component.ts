import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-info',
  templateUrl: './landing-info.component.html',
  styleUrls: ['./landing-info.component.css'],
})
export class LandingInfoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  images = [
    'assets/Images/Landing/P1.jpg',
    'assets/Images/Landing/P2.jpg',
    'assets/Images/Landing/P3.jpg',
    'assets/Images/Landing/P4.jpg',
    'assets/Images/Landing/P5.jpg',
  ];
}
