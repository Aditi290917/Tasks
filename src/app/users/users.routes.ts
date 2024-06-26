import { Routes } from '@angular/router';
import { NewTaskComponent } from '../tasks/new-task/new-task.component';
import { TasksComponent } from '../tasks/tasks.component';
import { canLeaveEditPage } from './user-tasks/user-tasks.component';


export const routes: Routes =[
    {
        path:'',
        redirectTo: 'tasks',
        pathMatch:'prefix'
    },
    {
        path:'tasks', // <domain>/users/<uid>/tasks
        component: TasksComponent
    },
    {
        path: 'tasks/new',
        component: NewTaskComponent,
        canDeactivate: [canLeaveEditPage]
    },
];
