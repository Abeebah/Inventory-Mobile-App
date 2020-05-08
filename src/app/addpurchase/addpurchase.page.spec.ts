import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchasePage } from './addpurchase.page';

describe('AddpurchasePage', () => {
  let component: AddpurchasePage;
  let fixture: ComponentFixture<AddpurchasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddpurchasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddpurchasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
