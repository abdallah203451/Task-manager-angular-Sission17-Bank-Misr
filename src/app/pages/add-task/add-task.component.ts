import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from '../../models/task';
import { TaskService } from '../../sevices/task-service.service';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.scss',
})
export class AddTaskComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    completed: false,
    dueDate: '',
    assignedTo: '',
  };
  addTaskForm!: FormGroup;

  constructor(private taskService: TaskService, private router: Router) {}

  addTask(): void {
    this.taskService.addTask(this.task);
    this.router.navigate(['/home']);
  }

  ngOnInit(): void {
    this.addTaskForm = new FormGroup({
      title: new FormControl(this.task.title, [
        Validators.required,
        Validators.minLength(3),
      ]),
      description: new FormControl(this.task.description, [
        Validators.required,
        Validators.minLength(20),
      ]),
      dueDate: new FormControl(this.task.dueDate, [Validators.required]),
      assignedTo: new FormControl(this.task.assignedTo, [
        Validators.required,
        Validators.minLength(3),
      ]),
    });
  }
  get title() {
    return this.addTaskForm.get('title');
  }
  get description() {
    return this.addTaskForm.get('description');
  }
  get dueDate() {
    return this.addTaskForm.get('dueDate');
  }
  get assignedTo() {
    return this.addTaskForm.get('assignedTo');
  }
}
