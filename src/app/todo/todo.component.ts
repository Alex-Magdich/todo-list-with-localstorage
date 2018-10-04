import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  name: string;


  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe(({name}) => this.name = name);
  }

}
