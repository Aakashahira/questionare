import { Inject, Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { LOCAL_STORAGE, SESSION_STORAGE, StorageService } from 'ngx-webstorage-service';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
questions = [];
STORAGE_KEY : string = "test2";
  constructor(@Inject(LOCAL_STORAGE)private storage: StorageService,
             private toastr: ToastrService) {
              this.questions = this.storage.get(this.STORAGE_KEY) || [];
              }

  createQuestion(data)
   {
    this.questions = this.storage.get(this.STORAGE_KEY) || [];
    let id = Date.now();
    if(data.type == 'written')
    {
      this.questions.push({
        "id" : id,
        "type" : data.type,
        "text" : data.text,
        "createdAt" : data.createdAt,
      });
    }
   else {
    this.questions.push({
      "id" : id,
      "type" : data.type,
      "text" : data.text,
      "optionA" : data.options.optionA,
      "optionB" : data.options.optionB,
      "optionC" : data.options.optionC,
      "optionD" : data.options.optionD,
      "createdAt" : data.createdAt,
    });
   } 
    this.storage.set(this.STORAGE_KEY,this.questions);
    // this.showSuccess("Question","Question created successfully");
   }
   getQuestions()
    {
     return this.storage.get(this.STORAGE_KEY) || [];
    }
   getSingleQuestion(id)
    {
      this.questions = this.storage.get(this.STORAGE_KEY)
     return this.questions.filter(el => el.id == id);
    }
    updateQuestion(data,id)
     {
      this.questions = this.storage.get(this.STORAGE_KEY) || [];
         let index = this.questions.findIndex(el => el.id == id);
         this.questions[index].text = data.text;
         this.questions[index].type = data.type;
         if(data.options)
          {
            this.questions[index].optionA = data.options.optionA;
            this.questions[index].optionB = data.options.optionB;
            this.questions[index].optionC = data.options.optionC;
            this.questions[index].optionD = data.options.optionD;
          }
         this.storage.set(this.STORAGE_KEY,this.questions);
     }
     deleteQuestion(id)
      {
        this.questions = this.storage.get(this.STORAGE_KEY) || [];
      this.questions = this.questions.filter(el => el.id != id);
      this.storage.set(this.STORAGE_KEY,this.questions);
      }
      updateAnswer(data,optionA?,optionB?,optionC?,optionD?)
      {
        let date = new Date().getTime();
        this.questions = this.storage.get(this.STORAGE_KEY) || [];
        let index = this.questions.findIndex(el => el.id == data?.id);
        this.questions[index].answer = true;
        this.questions[index].updatedAt = date;
        if(data?.type != 'written')
         {
          this.questions[index].selectedOptionA = optionA;
          this.questions[index].selectedOptionB = optionB;
          this.questions[index].selectedOptionC = optionC;
          this.questions[index].selectedOptionD = optionD;
         }
         else if(data?.type == 'written'){
           this.questions[index].textAnswer = optionA
         }
       
        this.storage.set(this.STORAGE_KEY,this.questions); 
      }
      showSuccess(header,msg) {
        this.toastr.success(header,msg);
      }
      showError(header,msg)
       {
        this.toastr.error(header,msg)
     }
}
