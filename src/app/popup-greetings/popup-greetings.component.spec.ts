import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupGreatingsComponent } from './popup-greetings.component';

describe('PopupGreatingsComponent', () => {
  let component: PopupGreatingsComponent;
  let fixture: ComponentFixture<PopupGreatingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupGreatingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGreatingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
