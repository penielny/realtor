import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesPageComponent } from './homes-page.component';

describe('HomesPageComponent', () => {
  let component: HomesPageComponent;
  let fixture: ComponentFixture<HomesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomesPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
