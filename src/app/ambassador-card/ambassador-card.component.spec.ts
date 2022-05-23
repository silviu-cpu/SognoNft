import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbassadorCardComponent } from './ambassador-card.component';

describe('AmbassadorCardComponent', () => {
  let component: AmbassadorCardComponent;
  let fixture: ComponentFixture<AmbassadorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmbassadorCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbassadorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
