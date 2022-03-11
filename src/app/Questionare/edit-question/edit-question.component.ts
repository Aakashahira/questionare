import { AfterViewChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-edit-question',
  templateUrl: './edit-question.component.html',
  styleUrls: ['./edit-question.component.css']
})
export class EditQuestionComponent implements OnInit,AfterViewInit {
 type;
 id;
 questions
  constructor(private route : ActivatedRoute,
              private utilityService : UtilityService,
              private router : Router) { }

  ngOnInit(): void {
  }
  ngAfterViewInit()
   {
    this.route.paramMap.subscribe((id : any)=> {
      this.id = id.params.id;
      this.questions =  this.utilityService.getSingleQuestion(this.id)
      console.log(this.questions[0].type);
       this.type = this.questions[0].type;
       if(this.type != 'written')
        {
          this.question.get('text').setValue(this.questions[0].text);
          this.question.get('type').setValue(this.questions[0].type);
          this.question.get('createdAt').setValue(this.questions[0].createdAt);
          this.question.get('options').get('optionA').setValue(this.questions[0].optionA);
          this.question.get('options').get('optionB').setValue(this.questions[0].optionB);
          this.question.get('options').get('optionC').setValue(this.questions[0].optionC);
          this.question.get('options').get('optionD').setValue(this.questions[0].optionD);
        }
        else if(this.type == 'written')
         {
          this.writtenQuestion.get('text').setValue(this.questions[0].text);
          this.writtenQuestion.get('type').setValue(this.questions[0].type);
          this.writtenQuestion.get('createdAt').setValue(this.questions[0].createdAt);
         } 
    })

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
     if(this.type != 'written')
      {
        this.utilityService.updateQuestion(this.question.value,this.id);
        this.utilityService.showSuccess("Question","Question Updated Successfully");
        this.router.navigateByUrl('/questionare/question-management');
      }
     else {
       console.log(this.writtenQuestion.value);
        this.utilityService.updateQuestion(this.writtenQuestion.value,this.id);
        this.utilityService.showSuccess("Question","Question Updated Successfully");
        this.router.navigateByUrl('/questionare/question-management');
     }
   }
}
