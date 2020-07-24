import { Component, OnInit } from '@angular/core';
import { CoreStructuresCardComponent } from 'src/app/components/core-structures-card/core-structures-card.component';

@Component({
  selector: 'app-tech-support',
  templateUrl: './tech-support.component.html',
  styleUrls: ['./tech-support.component.scss']
})
export class TechSupportComponent implements OnInit {

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
