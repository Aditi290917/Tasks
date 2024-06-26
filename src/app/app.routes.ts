import { Routes } from '@angular/router';
import { routes as userRoutes } from './users/users.routes';
import { NoTaskComponent } from './tasks/no-task/no-task.component';
import { UserTasksComponent, resolveTitle, resolveUserName } from './users/user-tasks/user-tasks.component';
import { NotFoundComponent } from './not-found/not-found.component';


export const routes: Routes =
[
    {
        path:'', // <domain>
        component: NoTaskComponent,
        title: 'No task selected'
    },
    {
        path: 'users/:userId', // <domin>/user/id
        component: UserTasksComponent,
        canMatch:[],
        children:userRoutes,
        resolve:{
            userName: resolveUserName
        },
        title: resolveTitle
    },

    {
       path: '**',
       component: NotFoundComponent
    }
];

    
