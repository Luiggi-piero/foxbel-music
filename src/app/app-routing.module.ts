import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'buscar' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
