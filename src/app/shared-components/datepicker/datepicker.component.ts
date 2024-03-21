import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent {
  @Output() dateChanged = new EventEmitter();
  date: string = '';

  onDateChange(event: any) {
    this.date = event.target.value;
    this.dateChanged.emit(this.date);
    console.log(this.date)
  }


}
