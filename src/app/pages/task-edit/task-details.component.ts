import { Component } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../sevices/task-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule, NgIf],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.scss',
})
export class TaskEditComponent {
  task: Task | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.task = this.taskService.getTask(id);
  }

  updateTask(): void {
    if (this.task) {
      this.taskService.updateTask(this.task);
      this.router.navigate(['/home']);
    }
  }
}
