import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  todos: signal<Todo[]>(
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
  ),
  template: `
    <h1>Building a TODO List</h1>

    
  `,
  styles: [],
})
export class AppComponent {
  
  updateTodo(todo: Todo) {}
}
