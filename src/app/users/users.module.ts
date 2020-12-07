import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// MODULES
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { UpdateUserComponent } from './components/update-user/update-user.component';

@NgModule({
  declarations: [UpdateUserComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, UsersRoutingModule, SharedModule]
})
export class UsersModule {}
