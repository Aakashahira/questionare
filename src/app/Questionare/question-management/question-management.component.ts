import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-question-management',
  templateUrl: './question-management.component.html',
  styleUrls: ['./question-management.component.css']
})
export class QuestionManagementComponent implements OnInit {
questions = []
  constructor(private utilityService : UtilityService,
              private router : Router) { }

  ngOnInit(): void {
    this.getQuestions();
  }
  getQuestions()
   {
    this.questions = this.utilityService.getQuestions();
    this.questions =  this.questions.sort((a,b) => b.createdAt - a.createdAt);
   }
  editQuestion(id)
   {
     this.router.navigateByUrl('/questionare/edit-question/' + id);
   }
   deleteQuestion(id)
    {
    this.utilityService.deleteQuestion(id);
    this.utilityService.showSuccess("Question","Delete Successfully");
    this.getQuestions();
    }
}
