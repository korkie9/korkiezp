import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-core-structures-card',
  templateUrl: './core-structures-card.component.html',
  styleUrls: ['./core-structures-card.component.scss']
})
export class CoreStructuresCardComponent implements OnInit {
 // @Input() image: string;
  @Input() struct: string;
  @Input() desc: string;
  @Input() img: string;

  constructor() { }

  ngOnInit(): void {
  }

}
