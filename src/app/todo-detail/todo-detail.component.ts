import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Todo } from '../model/todo';
import { TodoService } from '../service/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.css']
})
export class TodoDetailComponent implements OnInit {

  public todoId: number;
  public todoObject: Todo;

  constructor(private activatedRoute : ActivatedRoute, private todoService: TodoService) {
    this.todoId = 0;
    this.todoObject = new Todo(0,"", new Date(), "", true);
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe( (params: Params) =>{
      console.log("Detail - params.id: "+params.id);
      this.todoObject = this.todoService.getTodoById(params.id);
    });
  }

}
