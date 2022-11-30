import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DivresizerComponent } from './divresizer.component';

describe('DivresizerComponent', () => {
  let component: DivresizerComponent;
  let fixture: ComponentFixture<DivresizerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DivresizerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DivresizerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
