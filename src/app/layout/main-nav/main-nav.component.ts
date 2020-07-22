import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.scss']
})
export class MainNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toAbout(){
    document.getElementById("about").scrollIntoView({behavior: "smooth"});
  }
  toHome(){
    document.getElementById("home").scrollIntoView({behavior: "smooth"});
  }
  toTech(){
    document.getElementById("tech").scrollIntoView({behavior: "smooth"});
  }
  toContact(){
    document.getElementById("contact").scrollIntoView({behavior: "smooth"});
  }

}
