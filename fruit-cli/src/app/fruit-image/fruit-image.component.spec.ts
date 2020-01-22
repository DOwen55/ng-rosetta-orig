import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FruitImageComponent } from './fruit-image.component';

describe('FruitImageComponent', () => {
  let component: FruitImageComponent;
  let fixture: ComponentFixture<FruitImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FruitImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FruitImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
