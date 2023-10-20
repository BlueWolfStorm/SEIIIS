import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutIsComponentComponent } from './about-is-component.component';

describe('AboutIsComponentComponent', () => {
  let component: AboutIsComponentComponent;
  let fixture: ComponentFixture<AboutIsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutIsComponentComponent]
    });
    fixture = TestBed.createComponent(AboutIsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
