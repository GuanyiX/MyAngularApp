import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CssComponent } from './pages/css/css.component';
import { RxjsComponent } from './pages/rxjs/rxjs.component';

const routes: Routes = [
  { path: 'css', component: CssComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: '', redirectTo: '/css', pathMatch: 'full' },
  { path: '**', redirectTo: '/rxjs' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
