/**
 * Created by SergST on 13.03.2017.
 */

import {Todo} from "./todo";
import {Http, Headers, RequestOptions} from "@angular/http";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'
import 'rxjs/observable/throw'

@Injectable()
export class TodoService{
  todos: Todo[] = [];
  private apiUrl = 'api/todos';

  constructor(private http:Http){}

  getTodos(): Observable<Todo[]> {
    return this.http
      .get(this.apiUrl)
      .map(res => res.json().data)
      .map(res => this.todos = res)
      .catch(this.handleError)

  }

  createTodo(title: string){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let todo = new Todo(title);

    this.http
      .post(this.apiUrl, todo, options)
      .map(res => res.json().data)
      .map(todo => this.todos.push(todo))
      .catch(this.handleError)
  }

  deleteTodo(todo: Todo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${todo.id}`;

    this.http
      .delete(url, options)
      .map(() => {
        let index = this.todos.indexOf(todo);
        if (index != -1) {
          this.todos.splice(index, 1)
        }
      })
      .catch(this.handleError)
  }

  toggleTodo(todo: Todo){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers });
    let url = `${this.apiUrl}/${todo.id}`;

    this.http
      .put(url, todo, options)
      .map(() => todo.completed = !todo.completed)
      .catch(this.handleError)
  }

   handleError(err:any){
    console.error('Error', err);
    return Observable.throw(err.message || err)
  }
}