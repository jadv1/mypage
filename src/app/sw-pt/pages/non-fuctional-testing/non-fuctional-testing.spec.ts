import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NonFuctionalTesting } from './non-fuctional-testing';

describe('NonFuctionalTesting', () => {
  let component: NonFuctionalTesting;
  let fixture: ComponentFixture<NonFuctionalTesting>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NonFuctionalTesting],
    }).compileComponents();

    fixture = TestBed.createComponent(NonFuctionalTesting);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
