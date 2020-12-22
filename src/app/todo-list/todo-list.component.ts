import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  title: string;
  todoList: Todo[] = [];

  constructor(private todoService: TodoService) {
    this.title = 'Todo List';
    console.log('constructor');
   }

  ngOnInit(): void {
    console.warn(`This is onInit error.`);
    this.loadAllTodoList();
  }

  loadAllTodoList(): void{
    //const todoList = this.todoService.getAllTodos();
    this.todoList = this.todoService.getAllTodos();
    console.info(this.todoList);
  }

}
