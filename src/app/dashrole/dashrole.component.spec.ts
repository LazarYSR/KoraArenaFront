import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashroleComponent } from './dashrole.component';

describe('DashroleComponent', () => {
  let component: DashroleComponent;
  let fixture: ComponentFixture<DashroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DashroleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
