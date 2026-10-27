import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageJoins } from './page-joins';

describe('PageJoins', () => {
  let component: PageJoins;
  let fixture: ComponentFixture<PageJoins>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageJoins],
    }).compileComponents();

    fixture = TestBed.createComponent(PageJoins);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
