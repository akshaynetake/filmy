import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideopocComponent } from './videopoc.component';

describe('VideopocComponent', () => {
  let component: VideopocComponent;
  let fixture: ComponentFixture<VideopocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideopocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideopocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
