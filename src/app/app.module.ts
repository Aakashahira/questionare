import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateQuestionComponent } from './Questionare/create-question/create-question.component';
import { QuestionManagementComponent } from './Questionare/question-management/question-management.component';
import { EditQuestionComponent } from './Questionare/edit-question/edit-question.component';
import { QuestionsComponent } from './Questionare/questions/questions.component';
import { ToastrModule } from 'ngx-toastr';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateQuestionComponent,
    QuestionManagementComponent,
    EditQuestionComponent,
    QuestionsComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),
  ],
  exports : [FormsModule,
             ReactiveFormsModule,
            ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
