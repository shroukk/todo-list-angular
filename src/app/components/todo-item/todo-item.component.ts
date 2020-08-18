import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../../models/Todo'; 
import { TodoService } from '../../services/todo.service'




@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo:Todo;
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }
//set dynamic class
  setClasses() {
    let classes = {
        todo: true,
        'is-complete':this.todo.completed
    }
    return classes;
  }
  
  
// to change input states of the selected todo item
  onToggle(todo) {
    //toggle on UI
    todo.completed =!todo.completed;
   //toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }    
  
  
// to delete todo item
  onDelete(todo) {
    //console.log("delete");
    this.deleteTodo.emit(todo);
  }
}
