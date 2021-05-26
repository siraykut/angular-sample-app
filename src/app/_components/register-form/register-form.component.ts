import { Component, OnInit } from '@angular/core';
import {Member} from '../../_models/Member';
import {NgForm} from '@angular/forms';
import {RegisterViewForm} from '../../_viewModels/RegisterViewForm';
import {MemberService} from '../../_services/member.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  constructor(private memberService: MemberService) { }
  model: Member = new Member();
  registerFormViewModel: RegisterViewForm = new RegisterViewForm();

  ngOnInit(): void {
    this.getCities();
    this.getGenders();
  }

  registerFormAction(form: NgForm): void{
    alert(JSON.stringify(form.value));
  }

  getCities(): void{
    this.memberService.getCities().subscribe( data => {
      this.registerFormViewModel.Cities = data;
    });
  }

  getGenders(): void {
    this.memberService.getGenders().subscribe( data => {
      this.registerFormViewModel.Genders = data;
    });
  }

}
