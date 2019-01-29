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

  selectedTask: Task;
  onSelect(task: Task): void {
    this.selectedTask = task;
    task.status = !task.status;
  }

  ngOnInit() {
    this.getTasks();
  }

  getTasks(): void {
    this.taskService.getTasks()
        .subscribe(tasks => this.tasks = tasks);


  }

  add(title: string, status: boolean): void {
      title = title.trim();
      status = false;
      if (!title) { return; }
      this.taskService.addTask({ title, status } as Task)
          .subscribe(hero => {
              this.tasks.push(hero);
          });
  }

  delete(task:Task): void {
      this.tasks = this.tasks.filter(t => t !== task);
      this.taskService.deleteTask(task).subscribe();
  }

}
