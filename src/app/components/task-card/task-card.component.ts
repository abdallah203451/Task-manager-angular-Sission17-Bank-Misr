import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../models/task';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss',
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() deleteTask = new EventEmitter<number>();

  onDelete(): void {
    this.deleteTask.emit(this.task.id);
  }
}
