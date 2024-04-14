import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent implements OnInit {
  @Input() type: string;
  @Input() content: any[];

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.content, event.previousIndex, event.currentIndex);
  }

  expandEvent(item: any) {
    // Update values of filtered items
    this.content = this.content.map(card => {
      // Create a new object with the updated quantity
      if (card.id == item.id) {
        return { ...card, expand: !item.expand };
      } else {
        return { ...card }
      }
    });
  }
}
