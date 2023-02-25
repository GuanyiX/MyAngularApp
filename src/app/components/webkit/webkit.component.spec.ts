import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebkitComponent } from './webkit.component';

describe('WebkitComponent', () => {
  let component: WebkitComponent;
  let fixture: ComponentFixture<WebkitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebkitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebkitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
