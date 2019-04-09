import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPagePage } from './photo-page.page';

describe('PhotoPagePage', () => {
  let component: PhotoPagePage;
  let fixture: ComponentFixture<PhotoPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPagePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
