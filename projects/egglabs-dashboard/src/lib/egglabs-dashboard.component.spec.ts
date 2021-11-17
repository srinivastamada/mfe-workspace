import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EgglabsDashboardComponent } from './egglabs-dashboard.component';

describe('EgglabsDashboardComponent', () => {
  let component: EgglabsDashboardComponent;
  let fixture: ComponentFixture<EgglabsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EgglabsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EgglabsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
