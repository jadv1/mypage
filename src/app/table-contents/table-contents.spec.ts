import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TableContents } from './table-contents';

describe('TableContents', () => {
  let component: TableContents;
  let fixture: ComponentFixture<TableContents>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableContents],
    }).compileComponents();

    fixture = TestBed.createComponent(TableContents);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
