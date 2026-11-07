import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDb } from './page-db';

describe('PageDb', () => {
  let component: PageDb;
  let fixture: ComponentFixture<PageDb>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDb],
    }).compileComponents();

    fixture = TestBed.createComponent(PageDb);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
