import { ThemePalette } from '@angular/material/core';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

export interface Task {
  name: string;
  label:string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-pwa-checkboxes',
  templateUrl: './pwa-checkboxes.component.html',
  styleUrls: ['./pwa-checkboxes.component.scss']
})
export class PwaCheckboxesComponent implements OnInit {

  @Input('taskController') task !: Task;

  constructor() { }

  ngOnInit(): void {

  }

  allComplete: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    this.task.completed = this.allComplete;
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }

}
