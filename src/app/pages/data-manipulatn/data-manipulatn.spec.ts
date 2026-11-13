import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DataManipulatn } from './data-manipulatn';

describe('DataManipulatn', () => {
  let component: DataManipulatn;
  let fixture: ComponentFixture<DataManipulatn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataManipulatn],
    }).compileComponents();

    fixture = TestBed.createComponent(DataManipulatn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
