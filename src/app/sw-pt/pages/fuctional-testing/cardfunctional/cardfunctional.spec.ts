import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Cardfunctional } from './cardfunctional';

describe('Cardfunctional', () => {
  let component: Cardfunctional;
  let fixture: ComponentFixture<Cardfunctional>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Cardfunctional],
    }).compileComponents();

    fixture = TestBed.createComponent(Cardfunctional);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
