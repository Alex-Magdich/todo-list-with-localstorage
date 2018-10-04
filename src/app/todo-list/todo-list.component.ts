import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  newTodo: string = "";

  todos: Todo[] = [
    // {
    //   name:'buy milk',
    //   done: false
    // },
    // {
    //   name:'some sleep',
    //   done: false
    // },
    // {
    //   name:'some eat',
    //   done: false
    // }
  ];
  // serialObj: string;
  serialObj = JSON.stringify(this.todos);
  returnObj=[];

  constructor() {

  }



  ngOnInit() {
    this.returnObj = JSON.parse(localStorage.getItem("todos"));
    if (localStorage["todos"] === undefined) {
      localStorage.setItem("todos", this.serialObj);
    }
  }
  // ngOnChanges() {
  //   this.returnObj = JSON.parse(localStorage.getItem("todos"));
  // }

  addNewTodo() {
    if (this.newTodo !== "") {
      // this.todos.push({name: this.newTodo, done:false});

      this.returnObj = JSON.parse(localStorage.getItem("todos"));
      this.returnObj.push({ name: this.newTodo, done: false });
      this.serialObj = JSON.stringify(this.returnObj);
      localStorage.setItem("todos", this.serialObj);
      this.newTodo = "";
    }

  }
  toggleDone(i) {
      this.returnObj = JSON.parse(localStorage.getItem("todos"));
      this.returnObj[i].done = !this.returnObj[i].done;
       this.serialObj = JSON.stringify(this.returnObj);
       localStorage.setItem("todos", this.serialObj);

    // todo.done = !todo.done;
        // console.log(this.returnObj[i].done);
  }
  removeTodo(index) {
      this.returnObj = JSON.parse(localStorage.getItem("todos"));
      this.returnObj.splice(index, 1);
      this.serialObj = JSON.stringify(this.returnObj);
      localStorage.setItem("todos", this.serialObj);
      // console.log(i);
    // this.todos.splice(index, 1);
  }
  removeAllTodo(){
       localStorage.setItem("todos","[]");
       this.returnObj = JSON.parse(localStorage.getItem("todos"));
  }
}
