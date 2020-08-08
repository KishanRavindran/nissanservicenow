import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuppliertselficketingComponent } from './suppliertselficketing.component';

describe('SuppliertselficketingComponent', () => {
  let component: SuppliertselficketingComponent;
  let fixture: ComponentFixture<SuppliertselficketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuppliertselficketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuppliertselficketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});