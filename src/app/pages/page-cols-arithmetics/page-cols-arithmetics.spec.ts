import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageColsArithmetics } from './page-cols-arithmetics';

describe('PageColsArithmetics', () => {
  let component: PageColsArithmetics;
  let fixture: ComponentFixture<PageColsArithmetics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageColsArithmetics],
    }).compileComponents();

    fixture = TestBed.createComponent(PageColsArithmetics);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
