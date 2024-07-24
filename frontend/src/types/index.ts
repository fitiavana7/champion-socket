
export interface UserType{
    id : number ,
    username : string ,
    score : number ,
    type : string
}

export interface QuestionType {
    id : number ,
    question : string ,
    lists : {id :number , text : string}[],
    reponse : number
}