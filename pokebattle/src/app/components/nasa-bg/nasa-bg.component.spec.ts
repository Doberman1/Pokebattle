import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaBgComponent } from './nasa-bg.component';

describe('NasaBgComponent', () => {
  let component: NasaBgComponent;
  let fixture: ComponentFixture<NasaBgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NasaBgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NasaBgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
