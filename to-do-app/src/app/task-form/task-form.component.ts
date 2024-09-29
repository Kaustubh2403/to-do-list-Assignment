import { Component } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  task = { title: '' };

  constructor(private taskService: TaskService) { }

  onSubmit() {
    const newTask = { ...this.task, id: Date.now(), completed: false };
    this.taskService.addTask(newTask);
    this.task.title = '';  // Clear form
  }
}

