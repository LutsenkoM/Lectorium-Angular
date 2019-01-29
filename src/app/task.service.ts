import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Task } from './task';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TaskService {

    private tasksUrl = 'api/tasks';  // URL to web api

    constructor(private http: HttpClient) {}

    /** GET tasks from the server */
    getTasks (): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl)
            .pipe(
                // tap(_ => this.log('fetched tasks')),
                catchError(this.handleError('getTasks', []))
            );
    }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    /** POST: add a new hero to the server */
    addTask (task:Task): Observable<Task> {
        return this.http.post<Task>(this.tasksUrl, task, httpOptions).pipe(
            // tap((hero: Hero) => this.log(`added hero w/ id=${hero.id}`)),
            // catchError(this.handleError<Hero>('addHero'))
        );
    }

    /** DELETE: delete the hero from the server */
    deleteTask(task:Task | number): Observable<Task> {
        const id = typeof task === 'number' ? task : task.id;
        const url = `${this.tasksUrl}/${id}`;

        return this.http.delete<Task>(url, httpOptions).pipe(

        );
    }

}