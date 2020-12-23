import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private todoService: TodoService, private router: Router) {
    this.title = 'Todo List';
   }

  ngOnInit(): void {
    this.loadAllTodoList();
  }

  loadAllTodoList(): void{
    this.todoList = this.todoService.getAllTodos();
    console.info(this.todoList);
  }

  onCLickDetail(id: number): void{
    this.router.navigate(['todo', id, 'detail']);
  }

}
