import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';

@Component({
  selector: 'wwaa-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  form: FormGroup;
  result: string;

  constructor(public fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      title: '',
      actor: ''
    });
  }

}
