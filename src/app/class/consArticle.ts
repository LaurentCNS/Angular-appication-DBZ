export class ConsArticle {
    title : string;
    date : string;
    resume : string;
    content : string;
    picture : string;

    constructor (title:string, date:string, resume:string, content:string, picture:string){
        this.title = title;
        this.date = date;
        this.resume = resume
        this.content = content;
        this.picture = picture;
    }
}
