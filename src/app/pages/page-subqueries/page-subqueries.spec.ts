import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSubqueries } from './page-subqueries';

describe('PageSubqueries', () => {
  let component: PageSubqueries;
  let fixture: ComponentFixture<PageSubqueries>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSubqueries],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSubqueries);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
