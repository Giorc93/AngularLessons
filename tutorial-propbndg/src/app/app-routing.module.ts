import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArtlistComponent } from './artlist/artlist.component';
import { RequestComponent } from './components/request/request.component';

const routes: Routes = [
  { path: 'artlist', component: ArtlistComponent },
  { path: 'request', component: RequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
