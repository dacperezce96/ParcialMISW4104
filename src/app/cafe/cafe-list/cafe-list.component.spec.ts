/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';
import { CafeService } from '../cafe.service'
import { Cafe } from '../cafe'

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;
  let table: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [CafeService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    component.cafes = [
      new Cafe(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.lorem.words(2),
        faker.address.city(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.lorem.words(2),
        faker.address.city(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.image.imageUrl()
      ),
      new Cafe(
        faker.datatype.number(),
        faker.commerce.productName(),
        faker.lorem.words(2),
        faker.address.city(),
        faker.commerce.productName(),
        faker.datatype.number(),
        faker.image.imageUrl()
      )
    ];


    fixture.detectChanges();
    debug = fixture.debugElement;

    table = fixture.nativeElement.querySelector('table');
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should table has one rows of head", () => {
    expect(table.children[0].childElementCount).toEqual(1);
  });

  it("should table has three rows of coffes", () => {
    expect(table.children[1].childElementCount).toEqual(3);
  });
});
