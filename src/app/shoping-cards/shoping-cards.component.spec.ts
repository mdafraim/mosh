import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingCardsComponent } from './shoping-cards.component';

describe('ShopingCardsComponent', () => {
  let component: ShopingCardsComponent;
  let fixture: ComponentFixture<ShopingCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopingCardsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShopingCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
