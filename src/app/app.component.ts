import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Profile-SPA';

  constructor(private router: Router){}

  onActivate(Event): void{
    const scrollToTop = window.setInterval(() => {
    const pos = window.pageYOffset;
    if (pos > 0){
      window.scrollTo(0, pos - 20);
    }
    else{
      window.clearInterval(scrollToTop);
    }
    }, 16);
  }

}
