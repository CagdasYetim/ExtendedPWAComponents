import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaImageComponent } from './pwa-image.component';

describe('PwaImageComponent', () => {
  let component: PwaImageComponent;
  let fixture: ComponentFixture<PwaImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
