import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrennandComponent } from './brennand.component';

describe('BrennandComponent', () => {
  let component: BrennandComponent;
  let fixture: ComponentFixture<BrennandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BrennandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrennandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
