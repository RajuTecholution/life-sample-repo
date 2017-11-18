import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrabathComponent } from './prabath.component';

describe('PrabathComponent', () => {
  let component: PrabathComponent;
  let fixture: ComponentFixture<PrabathComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrabathComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrabathComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
