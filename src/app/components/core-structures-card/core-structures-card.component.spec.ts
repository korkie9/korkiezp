import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreStructuresCardComponent } from './core-structures-card.component';

describe('CoreStructuresCardComponent', () => {
  let component: CoreStructuresCardComponent;
  let fixture: ComponentFixture<CoreStructuresCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreStructuresCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreStructuresCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
