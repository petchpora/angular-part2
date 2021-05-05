import { Component, Input, EventEmitter, Output } from '@angular/core' ;
import { Task } from '../task';
@Component({
selector: 'app-todo',
templateUrl: './ToDoList.component.html',
styleUrls: ['./ToDoList.component.css']
})
export class ToDoListComponent {
@Input()
title: string;
newToDo:string;
todoArr = [];
toTask = [];
task:Task;
newDetail:string;
taskID:number;
showname:string = "-";
showdetail:string = "-";

addList(addToDo){
    this.todoArr.push(addToDo);
}
delList(pop){
    let delItem:number;
    delItem = this.todoArr.indexOf(pop);
    this.todoArr.splice(delItem, 1);
}

addTask(todo,detail){
    this.toTask.push({"id":this.taskID, "name":todo, "description":detail });
    this.taskID = this.taskID +1;

}

delTask(pop){
    let delItem:number;
    delItem = this.toTask.indexOf(pop);
    this.toTask.splice(delItem, 1);
}

showselected(select){
    this.showname = select.name;
    this.showdetail = select.description;
}

constructor() {}

@Output()
OnClicked: EventEmitter<Task> = new EventEmitter();
OnSelected: EventEmitter<Task> = new EventEmitter();
}
