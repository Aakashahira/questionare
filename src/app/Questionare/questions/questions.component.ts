import { Component, OnInit } from '@angular/core';
import { UtilityService } from '../../utility.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  questions;
  answeredQuestions;
  value = [];
  remaining = [];
  optionA = [];optionB = [];optionC = [];optionD = [];
  constructor(private utilityService : UtilityService) { }

  ngOnInit(): void {
    this.getQuestions()
  }
  getQuestions()
  {
   this.questions = this.utilityService.getQuestions();
   this.answeredQuestions = this.questions.filter(el => el.answer == true);
   this.questions = this.questions.filter(el => el.answer != true);
   this.questions =  this.questions.sort((a,b) => b.createdAt - a.createdAt);
   this.answeredQuestions =  this.answeredQuestions.sort((a,b) => b.updatedAt - a.updatedAt);
   console.log("ques",this.questions);
   console.log("ansues",this.answeredQuestions);
  }
  valueChange(value,i)
   {

    this.remaining[i] = 255 - value[i].length;
   }
   submitAnswer(data,i)
    {
    if(data?.type != 'written')
     {
      if((this.optionA[i] == false || this.optionA[i] == undefined) && (this.optionB[i] == false || this.optionB[i] == undefined) && (this.optionC[i] == false || this.optionC[i] == undefined) && (this.optionD[i] == false || this.optionD[i] == undefined))
      {
        alert("please select any none")
      }
      else {
        this.utilityService.updateAnswer(data,this.optionA[i],this.optionB[i],this.optionC[i],this.optionD[i]);
        
      }
     }
    else if(data?.type == 'written')
       {
         console.log("value",this.value[i]);
         this.utilityService.updateAnswer(data,this.value[i])
       }
       this.getQuestions()
      this.optionA = [];this.optionB = [];this.optionC = [];this.optionD = [];this.value = [];
      this.utilityService.showSuccess('Question',"Submitted successfully");
    }
}
