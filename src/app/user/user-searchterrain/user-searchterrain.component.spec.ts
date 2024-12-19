import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSearchterrainComponent } from './user-searchterrain.component';

describe('UserSearchterrainComponent', () => {
  let component: UserSearchterrainComponent;
  let fixture: ComponentFixture<UserSearchterrainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserSearchterrainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserSearchterrainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
