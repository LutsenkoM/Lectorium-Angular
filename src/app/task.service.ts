import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { Task } from './task';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({ providedIn: 'root' })
export class TaskService {

    private tasksUrl = 'api/tasks';  // URL to web api

    constructor(
        private http: HttpClient) { }

    /** GET heroes from the server */
    getTasks (): Observable<Task[]> {
        return this.http.get<Task[]>(this.tasksUrl)
            .pipe(
                // tap(_ => this.log('fetched tasks')),
                // catchError(this.handleError('getTasks', []))
            );
    }

        
}


/*
 Copyright 2017-2018 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */