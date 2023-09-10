import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberAdderComponent } from './number-adder.component';

describe('NumberAdderComponent', () => {
  let component: NumberAdderComponent;
  let fixture: ComponentFixture<NumberAdderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NumberAdderComponent]
    });
    fixture = TestBed.createComponent(NumberAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
