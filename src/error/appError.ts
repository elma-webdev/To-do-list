export class appError{
    public readonly message:string
    public readonly statusCode:number

    constructor(message:string,statusCode:number){
        this.message=message
        this.statusCode=statusCode
    }
}