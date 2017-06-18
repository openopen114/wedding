import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroBGComponent } from './hero-bg.component';

describe('HeroBGComponent', () => {
  let component: HeroBGComponent;
  let fixture: ComponentFixture<HeroBGComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroBGComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroBGComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
