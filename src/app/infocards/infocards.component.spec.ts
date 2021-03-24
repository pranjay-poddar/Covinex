import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfocardsComponent } from './infocards.component';

describe('InfocardsComponent', () => {
  let component: InfocardsComponent;
  let fixture: ComponentFixture<InfocardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfocardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfocardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
