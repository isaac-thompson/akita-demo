import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required])
  });

  constructor() {
  }

  initializeForm(): void {
    this.form.setValue({
      title: '',
      description: ''
    });
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  addTodo(): void {
    console.log(this.form.value);
  }

}
