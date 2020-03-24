export class Employee {
    id : number;
    name : string;
    department : any;
    salary : any;
    total: any;
    constructor(id?:number, name?:string, department?:any, salary?:any, total?:any){
        this.id=id;
        this.name=name;
        this.department=department;
        this.salary=salary;
        this.total=0;
    }
}