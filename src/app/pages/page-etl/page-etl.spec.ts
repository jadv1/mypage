import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEtl } from './page-etl';

describe('PageEtl', () => {
  let component: PageEtl;
  let fixture: ComponentFixture<PageEtl>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageEtl],
    }).compileComponents();

    fixture = TestBed.createComponent(PageEtl);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
