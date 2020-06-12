import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MultiComponent } from './components/multi/multi.component';

const routes: Routes = [{ path: 'multi/:number', component: MultiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
