import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabGroupBasic } from './tab-group-basic';

describe('TabGroupBasic', () => {
  let component: TabGroupBasic;
  let fixture: ComponentFixture<TabGroupBasic>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabGroupBasic],
    }).compileComponents();

    fixture = TestBed.createComponent(TabGroupBasic);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
