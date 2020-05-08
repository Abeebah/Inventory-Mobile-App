import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsalePage } from './addsale.page';

describe('AddsalePage', () => {
  let component: AddsalePage;
  let fixture: ComponentFixture<AddsalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsalePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
