import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PUBLIC_ROUTES } from './ui/public.routes';
import { PublicLayoutComponent } from './ui/public-layout/public-layout.component';

const routes: Routes =[
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '', component: PublicLayoutComponent, children: PUBLIC_ROUTES}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}