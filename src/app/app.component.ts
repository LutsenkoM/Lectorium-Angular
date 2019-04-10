import {Component, ViewChild} from '@angular/core';
import {NgForm} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  @ViewChild('form') form: NgForm;

  answers = [{
    type: 'yes',
    text: 'Да'
  }, {
    type: 'no',
    text: 'Нет'
  }];

  defaultAnswer = 'no';
  defaultCountry = 'ua';

  // submitForm(form: NgForm) {
  //   console.log(form);
  // }

  formData = {};
  isSubmited = false;

  addRandEmail() {
    const randEmail = 'max@gmai.com';
    // this.form.setValue({
    //   user: {
    //     email: randEmail,
    //     pass: ''
    //   },
    //   country: '',
    //   answer: ''
    // })

    this.form.form.patchValue({
      user: { email: randEmail }
    })
  }

  submitForm() {
    this.isSubmited = true;
    this.formData = this.form.value;
    this.form.reset();
    console.log(this.form);  // NEW WAY
  }

}
