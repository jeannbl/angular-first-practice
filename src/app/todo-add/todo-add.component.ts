import { Component, OnInit } from '@angular/core';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  public textInput : string = "";
  public todo: Todo;

  constructor(private todoService: TodoService) { 
    this.todo = new Todo(0,"", new Date(), "", true);
  }

  ngOnInit(): void {
  }

  onAddTodo(): void {
    let inputValue = (<HTMLInputElement>document.getElementById('todoInput')).value;
    this.todo = new Todo(Math.random(), inputValue, new Date(), "New todo description", true);
    console.log("Add - value: " +inputValue+" -todo: "+this.todo.id+" " +this.todo.title );
    this.todoService.addTodoItem(this.todo);
  }
}
