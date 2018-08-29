import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WebpageNotFoundComponent } from './webpage-not-found.component';

describe('WebpageNotFoundComponent', () => {
  let component: WebpageNotFoundComponent;
  let fixture: ComponentFixture<WebpageNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WebpageNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WebpageNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
