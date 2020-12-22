import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  public todos: Todo[] = [];

  constructor() { }

  getAllTodos(): Todo[] {
    let date = new Date();
    let day =  date.getDate().toString().padStart(2, "0");

    let todoListData: Todo[] = [
      {
        id:1,
        title: 'Study Angular',
        date:  date.getMonth()+1+'/'+day+'/'+date.getFullYear(),
        description: 'I need to study Angular fundamentals.',
        status: true
      },
      {
        id:2,
        title: 'Study TypeScript',
        date: date.getMonth()+'/'+day+'/'+date.getUTCFullYear(),
        description: 'I need to study TypeScript fundamentals.',
        status: true
      },
      {
        id:3,
        title: 'Study npm',
        date: (date.getMonth()+1)+'/'+day+'/'+date.getFullYear(),
        description: 'I need to study npm fundamentals.',
        status: false
      }
    ];

    return todoListData;
  }
}
