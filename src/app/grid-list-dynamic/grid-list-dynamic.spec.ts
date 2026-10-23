import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GridListDynamic } from './grid-list-dynamic';

describe('GridListDynamic', () => {
  let component: GridListDynamic;
  let fixture: ComponentFixture<GridListDynamic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridListDynamic],
    }).compileComponents();

    fixture = TestBed.createComponent(GridListDynamic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
