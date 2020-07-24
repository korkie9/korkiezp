import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-structures-card',
  templateUrl: './structures-card.component.html',
  styleUrls: ['./structures-card.component.scss']
})
export class StructuresCardComponent implements OnInit {
  @Input() struct: string;
  @Input() desc: string;
  constructor() { }

  ngOnInit(): void {
  }

}
