import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// SHARED MODULE
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';

const COMPONENTS = [HeaderComponent, WelcomeComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  exports: [...COMPONENTS]
})
export class CoreModule {}
