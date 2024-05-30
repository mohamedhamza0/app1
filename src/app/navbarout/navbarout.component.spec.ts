import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaroutComponent } from './navbarout.component';

describe('NavbaroutComponent', () => {
  let component: NavbaroutComponent;
  let fixture: ComponentFixture<NavbaroutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbaroutComponent]
    });
    fixture = TestBed.createComponent(NavbaroutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
