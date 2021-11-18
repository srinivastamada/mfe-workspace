import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VanguardActivFeedComponent } from './vanguard-activ-feed.component';

describe('VanguardActivFeedComponent', () => {
  let component: VanguardActivFeedComponent;
  let fixture: ComponentFixture<VanguardActivFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VanguardActivFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VanguardActivFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
