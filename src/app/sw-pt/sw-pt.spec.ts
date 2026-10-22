import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SwPt } from './sw-pt';

describe('SwPt', () => {
  let component: SwPt;
  let fixture: ComponentFixture<SwPt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwPt],
    }).compileComponents();

    fixture = TestBed.createComponent(SwPt);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
