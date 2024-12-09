import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
  CdkDrag,
  CdkDropList,CdkDropListGroup
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  DragDropModule,  CdkDropListGroup, CdkDropList, CdkDrag],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss' 
})
export class AppComponent {
  box1 = ['Item 1', 'Item 2', 'Item 3'];

  box2 = ['Item 4', 'Item 5'];

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      console.log(event.container.data)
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
       
      );
    }
  }
}
