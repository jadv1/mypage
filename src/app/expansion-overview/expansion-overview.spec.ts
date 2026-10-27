import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ExpansionOverview } from './expansion-overview';

describe('ExpansionOverview', () => {
  let component: ExpansionOverview;
  let fixture: ComponentFixture<ExpansionOverview>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpansionOverview],
    }).compileComponents();

    fixture = TestBed.createComponent(ExpansionOverview);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
