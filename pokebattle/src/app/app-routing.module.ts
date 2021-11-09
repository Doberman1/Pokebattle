import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaBgComponent } from './components/nasa-bg/nasa-bg.component';
//import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [{
path:'battlePage',
component:NasaBgComponent
},{
 // path:'Instructions',
 // component:WelcomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
