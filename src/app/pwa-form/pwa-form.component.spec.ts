import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaFormComponent } from './pwa-form.component';

describe('PwaFormComponent', () => {
  let component: PwaFormComponent;
  let fixture: ComponentFixture<PwaFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
