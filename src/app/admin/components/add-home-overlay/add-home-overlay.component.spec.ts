import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddHomeOverlayComponent } from './add-home-overlay.component';

describe('AddHomeOverlayComponent', () => {
  let component: AddHomeOverlayComponent;
  let fixture: ComponentFixture<AddHomeOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddHomeOverlayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddHomeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
