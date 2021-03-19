import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaCartComponent } from './pwa-cart.component';

describe('PwaCartComponent', () => {
  let component: PwaCartComponent;
  let fixture: ComponentFixture<PwaCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
