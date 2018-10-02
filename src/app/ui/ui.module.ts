import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SecureLayoutComponent } from './secure-layout/secure-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { ResetPasswordComponent } from './components/auth/reset-password/reset-password.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [HeaderComponent, FooterComponent, SecureLayoutComponent, PublicLayoutComponent, DashboardComponent, AboutComponent, LoginComponent, RegisterComponent, ResetPasswordComponent],
  exports: [ SecureLayoutComponent, PublicLayoutComponent]
})

export class UiModule { }
