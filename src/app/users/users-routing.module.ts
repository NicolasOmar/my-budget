import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// COMPONENTS
import { UpdateUserComponent } from './components/update-user/update-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/update',
    pathMatch: 'full'
  },
  {
    path: 'update',
    component: UpdateUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
