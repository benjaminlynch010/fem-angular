import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Building a TODO List</h1>
    <ul>
    @for(todo of todos(); track todo.id) {
        <li>
            <input
            type="checkbox"
            [checked]="todo.completed"
            (changed)="updateTodo(todo)"
            #el
            >
            {{ todo.title }}
            {{ todo.completed }}
        </li>
    }
    </ul>
  `,
  styles: [],
})

export class AppComponent {
    todos = signal<Todo[]>(
        [
            {
              id: 1,
              title: "Learn Angular",
              completed: false,
            },
            {
              id: 2,
              title: "Learn TypeScript",
              completed: false,
            },
            {
              id: 3,
              title: "Learn RxJS",
              completed: false,
            },
          ]
    );
  updateTodo(todo: Todo) {

  }
}
