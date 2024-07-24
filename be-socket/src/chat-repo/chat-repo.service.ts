import { Injectable } from '@nestjs/common';
import { listsQuestions, QuestionType, UserType } from './types';

@Injectable()
export class ChatRepoService {
    private users : UserType[] = [] 
    private questions : QuestionType[] = listsQuestions
    private q_id : number = 1
    private isRunning : boolean = false

    create({username , type} : {username : string , type : string}){
        const found = this.users.filter((e:UserType)=>e.username == username)
        if (found.length > 0) {
            return null
        } else {
            let id = Date.now(),score = 0
            const u = {id , username , type , score}
            this.users = [...this.users,u]
            return u
        }
    }

    finById(id : number){        
        return this.users.find((e:UserType)=> e.id == id)
    }

    begin(user_id : number){
        const user = this.users.find((e:UserType) => e.id == user_id )
        this.isRunning = user.type == 'host'
        return {isStarting : this.isRunning}
    }

    repondre({user_id , score , question_id , reponse_id} : { score : number, user_id : number, question_id : number , reponse_id : number}){
        const valid = this.verifyQuestion(question_id , reponse_id)
        if (valid) {
            this.addScore(user_id , score)            
        } 
        return valid
    }

    giveQuestion(){
        const question : QuestionType = this.getQuestionByID(this.q_id)
        this.q_id = this.q_id+1
        return question
    }
 
    addScore(user_id : number , score : number){
        this.users.map((u:UserType)=>{
            if (u.id == user_id) {
                u.score += score
            }
        })
    }

    verifyQuestion(question_id : number , reponse_id : number){
        const question = this.questions.find((q:QuestionType)=> q.id == question_id )
        return question.reponse == reponse_id
    }

    getQuestionByID(id : number){
        return this.questions.find((q:QuestionType) => q.id == id)
    }

    getAll(){
        return this.users ;
    }

    supprimer(id:number){
        console.log(id);
        this.users = this.users.filter((e:UserType) => e.id != id )
    }
}
