/**
 * Created by SergST on 13.03.2017.
 */

import {Todo} from "./todo";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import 'rxjs/add/operator/toPromise'

@Injectable()
export class TodoService{
  todos: Todo[] = [];
  private apiUrl = 'api/todos';

  constructor(private http:Http){}

  getTodos(): Promise<Todo[]> {
    return this.http
      .get(this.apiUrl)
      .toPromise()
      .then(res => res.json().data)
      .then(res => this.todos = res)
      .catch(this.handleError)

  }

  createTodo(title: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let todo = new Todo(title);

    this.http
      .post(this.apiUrl, todo, options)
      .toPromise()
      .then(res => res.json().data)
      .then(todo => this.todos.push(todo))
      .catch(this.handleError)
  }

  deleteTodo(todo: Todo){
    let index = this.todos.indexOf(todo);
    if (index != -1) {
      this.todos.splice(index, 1)
    }
  }

  toggleTodo(todo: Todo){
    todo.completed = !todo.completed
  }

  handleError(err:any){
    console.error('Error', err);
    return Promise.reject(err.message || err)
  }
}