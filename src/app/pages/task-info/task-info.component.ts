import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../sevices/task-service.service';
import { NgIf } from '@angular/common';
@Component({
  selector: 'app-task-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './task-info.component.html',
  styleUrl: './task-info.component.scss',
})
export class TaskInfoComponent implements OnInit {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTask(id);
  }
}
