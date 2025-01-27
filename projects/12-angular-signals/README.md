# 12-angular-signals

Angular Signals is a system that granularly tracks how and where your state is used throughout an application, allowing the framework to optimize rendering updates.

In this activity, you'll learn to work with Angular Signals.

## Run this example

From the command line at the root of the project:

```bash
ng serve 12-angular-signals
```

## Instructions

Create a Todolist application to showcase the `WritableSignal` produced by a call to `signal()`.

1. In `app.component.ts`, import `signal` from `@angular/core`
1. Create a property called `todos` of type `signal<Todo[]>();`

1. Initialize the value to be some todos in the following format:

   ```typescript
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
   ];
   ```

1. Update the component template to display an input for each of the `todos`.

   For each input:

   - Set `type="checkbox"`
   - Add a property bind `checked` to `todo.completed`
   - Add an event bind to `changed` to `updateTodo(todo)`
   - Define a template variable called `#el`

1. In the `updateTodo` method use the `todos.update()` to find and update the completed status of the parameter `todo`.
   _Note, the `update` function requires that you return a new instance of the list._

1. Save your changes.
1. Confirm in the browser that your changes have been reflected and that you can complete TODOs

### BONUS

1. Add a computed signal that calculates the number of completed todos.
