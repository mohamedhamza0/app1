import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IcecoffeComponent } from './icecoffe.component';

describe('IcecoffeComponent', () => {
  let component: IcecoffeComponent;
  let fixture: ComponentFixture<IcecoffeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IcecoffeComponent]
    });
    fixture = TestBed.createComponent(IcecoffeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
