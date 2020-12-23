export class Todo{
    constructor(
        public id: number,
        public title: string,
        public date : Date,
        public description : string,
        public status : boolean
    ){}
}

//commnet multiple lines of code : Ctrl+K+C and uncomment: Ctrl+K+U
// export interface Todo{
//     id: number;
//     title: string;
//     date : Date;
//     description : string;
//     status : boolean;
// }