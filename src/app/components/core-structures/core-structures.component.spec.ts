import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreStructuresComponent } from './core-structures.component';

describe('CoreStructuresComponent', () => {
  let component: CoreStructuresComponent;
  let fixture: ComponentFixture<CoreStructuresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoreStructuresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreStructuresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
