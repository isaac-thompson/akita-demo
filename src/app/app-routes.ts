import {Route} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AddTodoComponent} from './add-todo/add-todo.component';

export const ROUTES: Route[] = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'add-todo',
    component: AddTodoComponent
  }
];
