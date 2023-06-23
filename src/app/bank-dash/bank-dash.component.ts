import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import {BankData} from './bank.model';

@Component({
  selector: 'app-bank-dash',
  templateUrl: './bank-dash.component.html',
  styleUrls: ['./bank-dash.component.css']
})
export class BankDashComponent implements OnInit{

  formValue!:FormGroup
  BankModelObj : BankData = new BankData;
  allBankData: any;
  showAdd!:boolean;
  showBtn!:boolean;

  constructor(private formbuilder: FormBuilder, private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      name: [''],
      email: [''],
      mobile: [''],
      address: [''],
      services: [''],
    })
    this.getAllData();
  }

  clickAddBank()
  {
    this.formValue.reset();
    this.showAdd = true;
    this.showBtn = true;
  }

  addBank()
  {
    this.BankModelObj.name = this.formValue.value.name;
    this.BankModelObj.email = this.formValue.value.email;
    this.BankModelObj.mobile = this.formValue.value.mobile;
    this.BankModelObj.address = this.formValue.value.address;
    this.BankModelObj.services = this.formValue.value.services;

    this.api.addBank(this.BankModelObj).subscribe(res => {
      console.log(res);
      alert("Bank Added Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    }, err=>{
      console.log(err);
      alert("Bank Added Failed!");
    })
  }

  getAllData()
  {
    this.api.getBank().subscribe(res => {
      this.allBankData= res;
    }, err=>{
      console.log(err);
    })
  }

  deleteBank(data: any)
  {
    this.api.deleteBank(data).subscribe((res: any) => {
      console.log(res);
      alert("Bank Deleted Successfully");
      this.getAllData();
    })
  }
  
  onEditBank(data: any)
  {
    this.showAdd = false;
    this.showBtn = true;
    
    this.BankModelObj.id = data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
    this.formValue.controls['mobile'].setValue(data.mobile);
    this.formValue.controls['address'].setValue(data.address);
    this.formValue.controls['services'].setValue(data.services);

 
  }

  updateBank(){
    this.BankModelObj.name = this.formValue.value.name;
    this.BankModelObj.email = this.formValue.value.email;
    this.BankModelObj.mobile = this.formValue.value.mobile;
    this.BankModelObj.address = this.formValue.value.address;
    this.BankModelObj.services = this.formValue.value.services;

    this.api.updateBank(this.BankModelObj.id,this.BankModelObj).subscribe((res: any) => {
      alert("Bank Updated Successfully");
      this.formValue.reset();

      let ref= document.getElementById('close');
      ref?.click();

      this.getAllData();

    })
    
  }

}
