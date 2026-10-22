import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataBases } from './data-bases';

describe('DataBases', () => {
  let component: DataBases;
  let fixture: ComponentFixture<DataBases>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataBases],
    }).compileComponents();

    fixture = TestBed.createComponent(DataBases);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
