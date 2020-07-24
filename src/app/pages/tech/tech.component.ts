import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.scss']
})
export class TechComponent implements OnInit {
      //images///////////////////
      hourlyimg = "assets/watch.jpg";
      projectimg  = 'assets/project.jpg';
      remoteimg  = 'assets/remote.jpg';
   
      //structures///////////////
      hourlystruct = 'Hourly';
      projectstruct  = 'Project';
      remotestruct  = 'Remote Assist';
   
   
   //   //descriptions/////////////\
      hourlydesc = 'Technical Aid';
      projectdesc  = 'Bail-out / Specific Skill';
      remotedesc  = 'Immediate Support';

  constructor() { }

  ngOnInit(): void {
  }

}
