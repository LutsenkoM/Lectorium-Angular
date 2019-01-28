import { Component, OnInit } from '@angular/core';
import { Task } from '../../task'
import { TASKS } from '../../mock-tasks';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {

  tasks: Task[];

  constructor(private taskService: TaskService) { }
  
  // tasks = TASKS;

  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
    task.status = !task.status;
    console.log(TASKS);
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);
  }

}
