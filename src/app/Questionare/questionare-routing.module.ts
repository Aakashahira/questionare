import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateQuestionComponent } from './create-question/create-question.component';
import { EditQuestionComponent } from './edit-question/edit-question.component';
import { QuestionManagementComponent } from './question-management/question-management.component';
import { QuestionsComponent } from './questions/questions.component';

const routes: Routes = [
  {
    path : '',redirectTo : 'question-management',pathMatch:"full"
  },
  {
    path : 'create-question', component : CreateQuestionComponent
  },
  {
    path : 'question-management',component : QuestionManagementComponent
  },
  { path : 'edit-question/:id',component : EditQuestionComponent},
  {
    path : 'questions',component : QuestionsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QuestionareRoutingModule { }
