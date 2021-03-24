import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobeTrackComponent } from './globe-track.component';

describe('GlobeTrackComponent', () => {
  let component: GlobeTrackComponent;
  let fixture: ComponentFixture<GlobeTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobeTrackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobeTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
