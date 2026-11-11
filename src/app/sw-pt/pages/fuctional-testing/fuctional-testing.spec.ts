import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FuctionalTesting } from './fuctional-testing';

describe('FuctionalTesting', () => {
  let component: FuctionalTesting;
  let fixture: ComponentFixture<FuctionalTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FuctionalTesting],
    }).compileComponents();

    fixture = TestBed.createComponent(FuctionalTesting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
