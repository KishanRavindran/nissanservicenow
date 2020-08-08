import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SuppliertselficketingService } from './suppliertselficketing.service';



@Component({
  selector: 'app-suppliertselficketing',
  templateUrl: './suppliertselficketing.component.html',
  styleUrls: ['./suppliertselficketing.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SuppliertselficketingComponent implements OnInit {

option = [
{ key: '', value: '- Select option -' },
{ key: '1', value: 'Option 1' }
];
systemaccessentity = {
   first_name: '',
   last_name: '',
   nissan_username: null,
   renault_username: null,
   employee_type: '',
   employee_position: '',
   email: '',
   country_code: null,
   language_code: null,
   application_list: '',
   file_attached: '',
   error_message: ''
};
option = [
{ key: '', value: '- Select option -' },
{ key: '1', value: 'Option 1' }
];
systemaccessentity = {
   first_name: '',
   last_name: '',
   nissan_username: null,
   renault_username: null,
   employee_type: '',
   employee_position: '',
   email: '',
   country_code: null,
   language_code: null,
   application_list: '',
   file_attached: '',
   error_message: ''
};

  constructor(
private suppliertselficketingService: SuppliertselficketingService
  ) { }

  ngOnInit() {
    
  }

GpCreate() {
 this.suppliertselficketingService.GpCreate(this.systemaccessentity)
  .subscribe(
    data => {
       console.log('data created successfully');
    },
    error => {
       console.log('cannot able to create the data');
    }
    );
}

}