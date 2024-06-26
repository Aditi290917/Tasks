import { Component, DestroyRef, OnInit, computed, inject, input } from '@angular/core';
import { UsersService } from '../users.service';
import { ActivatedRoute, ActivatedRouteSnapshot, CanDeactivateFn, ResolveFn, RouterLink, RouterOutlet, RouterStateSnapshot } from '@angular/router';
import { NewTaskComponent } from '../../tasks/new-task/new-task.component';

@Component({
  selector: 'app-user-tasks',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './user-tasks.component.html',
  styleUrl: './user-tasks.component.css',
})
export class UserTasksComponent {
  userName= input.required<string>();
  //userId = input.required<string>();
  //private usersService = inject(UsersService);
  //private activatedRoute = inject (ActivatedRoute);
  //private destoryRef = inject(DestroyRef);

  //userName = computed (
   // () => this.usersService.users.find((u) => u.id === this.userId())?.name);

   // ngOnInit(): void {
      //console.log(this.activatedRoute);
      //const subscription = this.activatedRoute.paramMap.subscribe({
        //next: paramMap => {
         // this.userName = this.usersService.users.find(
          //  (u) => u.id === paramMap.get('userId')
          //)?.name || '';
        //}
      //});
      //this.destoryRef.onDestroy(() => subscription.unsubscribe());
      
    //}
  }

    export const resolveUserName: ResolveFn<string>=(
      activatedRoute:ActivatedRouteSnapshot,
      routerState: RouterStateSnapshot
    ) =>
      {
        const usersService = inject(UsersService);
        const userName = usersService.users.find(
          (u) => u.id === activatedRoute.paramMap.get('userId')
        )?.name || '';
        return userName;
      };

      export const resolveTitle: ResolveFn<string> =(
        activatedRoute:ActivatedRouteSnapshot,
      routerState: RouterStateSnapshot
      ) => {
        return resolveUserName(activatedRoute, routerState) + '\'s Tasks'
      }

      export const canLeaveEditPage: CanDeactivateFn<NewTaskComponent> = (component) =>{
        if(component.enteredTitle() || component.enteredDate() || component.enteredSummary()) 
          {
            window.confirm('Do you really want to leave? You will lose the entered data')
          }
          return true;
      } 
