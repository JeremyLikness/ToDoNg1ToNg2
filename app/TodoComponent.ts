import {Component} from 'angular2/core'; 

export interface ITodo {
    title: string;
    done: boolean; 
}

let empty = () => <ITodo>{title:"", done: false}

@Component({
    selector: 'to-do',
    templateUrl: "todo.html"
})
export class TodoComponent {
    public list: ITodo[];
    public selected: ITodo; 
    public editing: boolean;
    
    constructor() {
        this.list = [];
        this.selected = empty();
        this.editing = false;
    }
    
    select(todo:ITodo): void {
        this.selected = todo;
    }
    
    add(): void {
        if (!this.editing) {
            this.list.push(this.selected);
            this.selected = empty();
        }
    }
    
    cancel(): void {
        this.selected = empty();
        this.editing = false;
    }
    
    delete(todo: ITodo) {
        var newList = [], idx;
        for (idx = 0; idx < this.list.length; idx+=1) {
            if (this.list[idx] !== todo) {
                newList.push(this.list[idx]);
            }
        }
        this.list = newList;
        this.cancel();
    }
}
