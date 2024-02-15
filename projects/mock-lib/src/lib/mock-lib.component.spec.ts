import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockLibComponent } from './mock-lib.component';

describe('MockLibComponent', () => {
  let component: MockLibComponent;
  let fixture: ComponentFixture<MockLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockLibComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MockLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
