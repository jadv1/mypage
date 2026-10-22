import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Programming } from './programming';

describe('Programming', () => {
  let component: Programming;
  let fixture: ComponentFixture<Programming>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Programming],
    }).compileComponents();

    fixture = TestBed.createComponent(Programming);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
