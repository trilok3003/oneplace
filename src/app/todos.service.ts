import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private http: HttpClient) { }
  getTodos(): Observable<any> {
   return this.http.get(environment.api + 'todos');
  }
  createTodo(params): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        // Authorization: 'my-auth-token'
      })
    };
    return this.http.post(environment.api + 'todos', params);
   }
   removeTodoById(id): Observable<any> {
    return this.http.delete(environment.api + 'removeTodo/' + id);
   }
   deleteTodo(params): Observable<any> {
    return this.http.delete(environment.api + 'todos', params);
   }
   updateTodo(params): Observable<any> {
    return this.http.put(environment.api + 'todos', params);
   }
   removeTodoByTask(id): Observable<any> {
    return this.http.delete(environment.api + 'todos/' + id);
   }
}
