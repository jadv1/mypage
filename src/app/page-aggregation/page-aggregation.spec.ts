import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageAggregation } from './page-aggregation';

describe('PageAggregation', () => {
  let component: PageAggregation;
  let fixture: ComponentFixture<PageAggregation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAggregation],
    }).compileComponents();

    fixture = TestBed.createComponent(PageAggregation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
