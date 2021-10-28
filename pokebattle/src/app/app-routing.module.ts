import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NasaBgComponent } from './components/nasa-bg/nasa-bg.component';

const routes: Routes = [{
path:'battlePage',
component:NasaBgComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
