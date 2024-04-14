import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConstituentDashboardComponent } from './constituent-dashboard.component';

describe('ConstituentDashboardComponent', () => {
  let component: ConstituentDashboardComponent;
  let fixture: ComponentFixture<ConstituentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConstituentDashboardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConstituentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
