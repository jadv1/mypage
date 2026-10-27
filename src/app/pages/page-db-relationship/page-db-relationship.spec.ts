import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageDbRelationship } from './page-db-relationship';

describe('PageDbRelationship', () => {
  let component: PageDbRelationship;
  let fixture: ComponentFixture<PageDbRelationship>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDbRelationship],
    }).compileComponents();

    fixture = TestBed.createComponent(PageDbRelationship);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
