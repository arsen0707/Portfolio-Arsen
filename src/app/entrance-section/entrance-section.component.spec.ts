import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntranceSectionComponent } from './entrance-section.component';

describe('EntranceSectionComponent', () => {
  let component: EntranceSectionComponent;
  let fixture: ComponentFixture<EntranceSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntranceSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntranceSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
