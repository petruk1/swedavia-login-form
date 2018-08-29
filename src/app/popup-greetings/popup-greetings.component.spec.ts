import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {PopupGreetingsComponent} from './popup-greetings.component';

describe('PopupGreetingsComponent', () => {
  let component: PopupGreetingsComponent;
  let fixture: ComponentFixture<PopupGreetingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [PopupGreetingsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupGreetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
