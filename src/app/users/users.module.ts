import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// MODULES
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { UpdateUserComponent } from './update-user/update-user.component';

@NgModule({
  declarations: [UpdateUserComponent],
  imports: [CommonModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}
