export class SecondTask {
    id: number;
    name: string;
    mark: any;
    total: number;
    
    constructor(id?: number, name?: string, mark ?:any, total?: number ) {
        id = this.id;
        name = this.name;
        mark = this.mark;
        total = 0;
    }
}
