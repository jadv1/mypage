import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageSets } from './page-sets';

describe('PageSets', () => {
  let component: PageSets;
  let fixture: ComponentFixture<PageSets>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSets],
    }).compileComponents();

    fixture = TestBed.createComponent(PageSets);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
