import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomemDoNordesteComponent } from './homem-do-nordeste.component';

describe('HomemDoNordesteComponent', () => {
  let component: HomemDoNordesteComponent;
  let fixture: ComponentFixture<HomemDoNordesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomemDoNordesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomemDoNordesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
