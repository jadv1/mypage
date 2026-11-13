import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuxFunc } from './aux-func';

describe('AuxFunc', () => {
  let component: AuxFunc;
  let fixture: ComponentFixture<AuxFunc>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuxFunc],
    }).compileComponents();

    fixture = TestBed.createComponent(AuxFunc);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
