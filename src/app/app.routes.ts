import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskEditComponent } from './pages/task-edit/task-details.component';
import { TaskInfoComponent } from './pages/task-info/task-info.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'home/:id/edit', component: TaskEditComponent },
  { path: 'home/:id', component: TaskInfoComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
