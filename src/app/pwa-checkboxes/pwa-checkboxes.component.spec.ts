import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PwaCheckboxesComponent } from './pwa-checkboxes.component';

describe('PwaCheckboxesComponent', () => {
  let component: PwaCheckboxesComponent;
  let fixture: ComponentFixture<PwaCheckboxesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PwaCheckboxesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PwaCheckboxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
