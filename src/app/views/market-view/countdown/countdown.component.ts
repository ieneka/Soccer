import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.css']
})
export class CountdownComponent implements OnInit {

  countDownDate = new Date( 'october 30, 2020 13:00:00' ).getTime();
  demo: any;

  timeLeft = setInterval(() => {
    const now: number = new Date().getTime();
    const distance = this.countDownDate - now;

    const days: number = Math.floor( distance / (1000 * 60 * 60 * 24) );
    const hours: number =  Math.floor(( distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 ));
    const minutes: number = Math.floor(( distance % (1000 * 60 * 60) / (1000 * 60 ) ));
    const seconds: number = Math.floor(( distance % (1000 * 60) / (1000) ));

    this.demo = days + ' d ' + hours + ' h ' +  minutes + ' m ' + seconds + ' s';

  });

  constructor() { }

  ngOnInit(): void {
  }


}
