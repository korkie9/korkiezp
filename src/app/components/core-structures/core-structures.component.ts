import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-core-structures',
  templateUrl: './core-structures.component.html',
  styleUrls: ['./core-structures.component.scss']
})
export class CoreStructuresComponent implements OnInit {
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
