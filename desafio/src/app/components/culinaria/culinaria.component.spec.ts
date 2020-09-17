import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CulinariaComponent } from './culinaria.component';

describe('CulinariaComponent', () => {
  let component: CulinariaComponent;
  let fixture: ComponentFixture<CulinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CulinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CulinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
