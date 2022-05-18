export class Article {
    id? : number;
    isFavorite? : boolean;
    title? : string;
    date? : number;
    resume? : string;
    content? : string;
    picture? : string;


    constructor (id?: number, isFavorite?: boolean, title?:string, date?:number, resume?:string, content?:string, picture?:string){
        this.id = id;
        this.isFavorite = isFavorite;
        this.title = title;
        this.date = date;
        this.resume = resume
        this.content = content;
        this.picture = picture;
    }
}
