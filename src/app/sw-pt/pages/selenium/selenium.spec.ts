import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Selenium } from './selenium';

describe('Selenium', () => {
  let component: Selenium;
  let fixture: ComponentFixture<Selenium>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Selenium],
    }).compileComponents();

    fixture = TestBed.createComponent(Selenium);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
