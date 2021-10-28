import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaBgComponent } from './components/nasa-bg/nasa-bg.component';
import { WelcomepageComponent } from './components/welcomepage/welcomepage.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomepageComponent
  },
  {
    path: 'play',
    component: NasaBgComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
