import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../IProperty.inteface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
@ViewChild('Form') addPropertyForm!: NgForm;
@ViewChild('formTabs') formTabs!: TabsetComponent;

propertyTypes: Array<string>=['House','Apartment','Duplex'];
furnishTypes: Array<string>=['Fully','Semi','Unfunished'];
mainEnterance: Array<string>=['East','West','South','North'];

propertyView: IProperty={
  Id:0,
  Name:'',
  Price:0,
  Type:''
};
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active=true;
    console.log(this.formTabs);
  }


}
