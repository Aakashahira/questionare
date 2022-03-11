import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.css']
})
export class CreateQuestionComponent implements OnInit {
  type = "multiple";
  constructor(private utilityService : UtilityService,
              private router : Router) { }

  ngOnInit(): void {
  }
  question = new FormGroup({
    type : new FormControl(null),
    text : new FormControl(null,Validators.required),
    options : new FormGroup({
      optionA : new FormControl(null,Validators.required),
      optionB : new FormControl(null,Validators.required),
      optionC : new FormControl(null),
      optionD : new FormControl(null),
    }),
    createdAt : new FormControl(null)
  })
  writtenQuestion = new FormGroup({
    type : new FormControl(null),
    text : new FormControl(null,Validators.required),
    createdAt : new FormControl(null)
  })
 onSubmit()
  {
   this.question.get('createdAt').setValue(new Date().getTime());
   this.question.get('type').setValue(this.type);
   this.utilityService.createQuestion(this.question.value)
   this.utilityService.showSuccess("Question","Question created successfully");
   this.router.navigateByUrl('/questionare/question-management');
  
  }
  onSubmit2()
   {
    this.writtenQuestion.get('createdAt').setValue(new Date().getTime());
    this.writtenQuestion.get('type').setValue(this.type);
    this.utilityService.createQuestion(this.writtenQuestion.value);
    
    this.router.navigateByUrl('/questionare/question-management');
   }
}
