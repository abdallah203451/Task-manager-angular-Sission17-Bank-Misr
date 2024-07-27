import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../sevices/task-service.service';
import { RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { TaskCardComponent } from '../../components/task-card/task-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, NgFor, TaskCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks();
  }

  onTaskDelete(id: number): void {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getTasks();
  }
}
