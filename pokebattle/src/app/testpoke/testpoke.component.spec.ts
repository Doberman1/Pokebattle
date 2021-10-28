import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestpokeComponent } from './testpoke.component';

describe('TestpokeComponent', () => {
  let component: TestpokeComponent;
  let fixture: ComponentFixture<TestpokeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestpokeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestpokeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
