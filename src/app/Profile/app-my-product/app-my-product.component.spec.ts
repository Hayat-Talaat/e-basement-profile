import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMyproduct } from './app-my-product.component';

describe('ProductsComponent', () => {
  let component: AppMyproduct;
  let fixture: ComponentFixture<AppMyproduct>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppMyproduct ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppMyproduct);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
