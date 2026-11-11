import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Playwright } from './playwright';

describe('Playwright', () => {
  let component: Playwright;
  let fixture: ComponentFixture<Playwright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Playwright],
    }).compileComponents();

    fixture = TestBed.createComponent(Playwright);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
