import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',redirectTo : 'questionare',pathMatch:"full"
  },
  {
    path: 'questionare',
    loadChildren: () =>
      import('./Questionare/questionare.module').then((m) => m.QuestionareModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
