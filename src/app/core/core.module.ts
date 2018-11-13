import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { MainareaComponent } from './components/mainarea/mainarea.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import {routes} from './core.routes';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AdminComponent } from './components/admin/admin.component'
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HeaderComponent, MainareaComponent, FooterComponent, HomeComponent, LoginComponent, LogoutComponent, AdminComponent],
  exports: [HeaderComponent, MainareaComponent, FooterComponent]
})
export class CoreModule { }
