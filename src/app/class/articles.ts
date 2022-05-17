export class Article {
    id? : number;
    title? : string;
    date? : string;
    resume? : string;
    content? : string;
    picture? : string;

    constructor (id?: number, title?:string, date?:string, resume?:string, content?:string, picture?:string){
        this.id = id;
        this.title = title;
        this.date = date;
        this.resume = resume
        this.content = content;
        this.picture = picture;
    }
}
