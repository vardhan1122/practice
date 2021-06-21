import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeRuffComponent } from './practice-ruff.component';

describe('PracticeRuffComponent', () => {
  let component: PracticeRuffComponent;
  let fixture: ComponentFixture<PracticeRuffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeRuffComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeRuffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
