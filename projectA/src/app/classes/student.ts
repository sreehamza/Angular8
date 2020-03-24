export class Student {
    id: number;
    name: string;
    mark: any;
    total:any;
    constructor(id?: number, name?: string, mark?: any) {
        this.id = id;
        this.name = name;
        this.mark = mark;
        this.total=mark;
    }
}
