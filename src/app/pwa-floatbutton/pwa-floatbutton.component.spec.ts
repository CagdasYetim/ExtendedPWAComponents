import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaFloatbuttonComponent } from './pwa-floatbutton.component';

describe('PwaFloatbuttonComponent', () => {
  let component: PwaFloatbuttonComponent;
  let fixture: ComponentFixture<PwaFloatbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaFloatbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaFloatbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
