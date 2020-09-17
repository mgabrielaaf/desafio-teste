import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarcoZeroComponent } from './marco-zero.component';

describe('MarcoZeroComponent', () => {
  let component: MarcoZeroComponent;
  let fixture: ComponentFixture<MarcoZeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarcoZeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarcoZeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
