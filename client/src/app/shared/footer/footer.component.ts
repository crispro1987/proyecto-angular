import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import Swal from 'sweetalert2';
import { Instructor } from '../models/instructor';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public instructor : Instructor;
  public instForm: FormGroup;
  public send: boolean = false;

  constructor( private apiService : ApiService,
               private fb : FormBuilder ) { }

  ngOnInit(): void {
    this.createForm();
  }

  get namePattern(){
    if (
      this.instForm.controls.name.errors &&
      this.instForm.controls.name.touched
    ) {
      if (this.instForm.controls.name.errors.pattern) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get nameRequired() {
    if (
      this.instForm.controls.name.errors &&
      this.instForm.controls.name.touched
    ) {
      if (this.instForm.controls.name.errors.required) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get surnamePattern(){
    if (
      this.instForm.controls.surname.errors &&
      this.instForm.controls.surname.touched
    ) {
      if (this.instForm.controls.surname.errors.pattern) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get surnameRequired() {
    if (
      this.instForm.controls.surname.errors &&
      this.instForm.controls.surname.touched
    ) {
      if (this.instForm.controls.surname.errors.required) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get emailPattern(){
    if (
      this.instForm.controls.email.errors &&
      this.instForm.controls.email.touched
    ) {
      if (this.instForm.controls.email.errors.pattern) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get emailRequired() {
    if (
      this.instForm.controls.email.errors &&
      this.instForm.controls.email.touched
    ) {
      if (this.instForm.controls.email.errors.required) {
        return true;
      } else {
        return false;
      }
    }
    return false;
  }

  get instName() {
    return this.instForm.get('name').value;
  }

  get instSurname() {
    return this.instForm.get('surname').value;
  }

  get instEmail() {
    return this.instForm.get('email').value;
  }

  createForm(){
    this.instForm = this.fb.group({
      name: ['',[Validators.required, Validators.pattern(/^[,.A-Za-z0-9-À-ÿ\u00f1\u00d1\s]+$/)]],
      surname: ['',[Validators.required, Validators.pattern(/^[,.A-Za-z0-9-À-ÿ\u00f1\u00d1\s]+$/)]],
      email: ['',[Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]]
    })
  }

  addInstructor(){

    if(this.instForm.invalid){
      return Object.values(this.instForm.controls).forEach((control) => {
        control.markAllAsTouched();
      });
    }

    Swal.fire({
      allowOutsideClick: false,
      icon: 'info',
      text: 'Agregando Instructor. Espere por favor',
    });
    Swal.showLoading();

    const dat = moment();

    this.instructor = {
      name_instructor : this.instForm.controls.name.value,
      surname_instructor : this.instForm.controls.surname.value,
      email_instructor : this.instForm.controls.email.value,
      date_created_instructor : dat.format('YYYY-MM-DD')
    }

    this.apiService.addInstructor('instructors', this.instructor).subscribe(resp => {
      Swal.close();

      this.send = true;
    })
  }

}
