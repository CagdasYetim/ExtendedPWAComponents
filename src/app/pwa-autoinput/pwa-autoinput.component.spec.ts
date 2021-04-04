import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaAutoinputComponent } from './pwa-autoinput.component';

describe('PwaAutoinputComponent', () => {
  let component: PwaAutoinputComponent;
  let fixture: ComponentFixture<PwaAutoinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaAutoinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaAutoinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
