import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-friend-input',
  templateUrl: './friend-input.component.html',
  styleUrls: ['./friend-input.component.scss']
})
export class FriendInputComponent implements OnInit {
  @Input() name: string = '';
  @Input() percentage: number = 0;
  // @Output() change = new EventEmitter<number>();
  constructor() {
    
  }

  ngOnInit(): void {
  }

  onChanges(value: number) {
    console.log(value)
    // this.changes.emit(event.target.)
  }

}
