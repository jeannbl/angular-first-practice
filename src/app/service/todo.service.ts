import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() { 
    this.setAllTodos();
  }

  setAllTodos(): void{
    let date = new Date();

    this.todos = [
      {
        id: Math.random(),
        title: 'Study Angular',
        date:  date,
        description: 'I need to study Angular fundamentals.',
        status: true
      },
      {
        id: Math.random(),
        title: 'Study TypeScript',
        date: date,
        description: 'I need to study TypeScript fundamentals.',
        status: true
      },
      {
        id: Math.random(),
        title: 'Study npm',
        date: date,
        description: 'I need to study npm fundamentals.',
        status: false
      }
    ];
  }

  getAllTodos(): Todo[] {
    return this.todos;
  }

  getTodoById(id: number): Todo {
    return ( this.todos.find(todoObject => (todoObject.id == id)) as Todo);
  }

  addTodoItem(todo: Todo): void{
    this.todos.push(todo);
    console.log("After add todo: "+this.todos);
  }
}
