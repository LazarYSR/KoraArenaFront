import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RespLoginComponent } from './resp-login.component';

describe('RespLoginComponent', () => {
  let component: RespLoginComponent;
  let fixture: ComponentFixture<RespLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RespLoginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RespLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
