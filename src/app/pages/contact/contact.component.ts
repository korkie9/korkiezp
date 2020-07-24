import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  formQuery: FormGroup;

  get formName() {
    return this.formQuery.get('name');
  }
  get formSurname() {
    return this.formQuery.get('surname');
  }
  get formEmail() {
    return this.formQuery.get('email');
  }
  get formSubject() {
    return this.formQuery.get('subject');
  }
  get formMessage() {
    return this.formQuery.get('message');
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formQuery = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      surname: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(20),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.maxLength(10)]],
      message: ['', [Validators.required, Validators.maxLength(70)]],
    });
  }

  onSubmit() {
    console.log(
      `${this.formName.value} ${this.formSurname.value} with email ${this.formEmail.value} said ${this.formMessage.value} regarding ${this.formSubject.value}`
    );
    this.formQuery.reset();
  }
}
