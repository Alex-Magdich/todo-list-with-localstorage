import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HomeComponent } from './home/home.component';
import { TodoComponent } from './todo/todo.component';

import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'todos', component: TodoListComponent},
  { path: 'todo/:name', component: TodoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    HomeComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    [ RouterModule.forRoot(routes) ],
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
