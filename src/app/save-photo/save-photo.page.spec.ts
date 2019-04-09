import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavePhotoPage } from './save-photo.page';

describe('SavePhotoPage', () => {
  let component: SavePhotoPage;
  let fixture: ComponentFixture<SavePhotoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavePhotoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavePhotoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
