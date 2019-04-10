import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  // @ViewChild('form') form: NgForm;  NEW WAY
  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  submitForm(form: NgForm) {
    console.log(form);
  }

  // submitForm() {
  //   console.log(this.form);  // NEW WAY
  // }
}
