import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardDtmptn } from './card-dtmptn';

describe('CardDtmptn', () => {
  let component: CardDtmptn;
  let fixture: ComponentFixture<CardDtmptn>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDtmptn],
    }).compileComponents();

    fixture = TestBed.createComponent(CardDtmptn);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
