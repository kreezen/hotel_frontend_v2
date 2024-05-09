import { Component, EventEmitter, Input, Output } from '@angular/core';
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

  @Output() dateChanged = new EventEmitter<string>();
  @Input() displaDate = '';

  onDateChange(event: any) {
    const date = event.target.value;
    const isoDate = new Date(date).toISOString()
    this.dateChanged.emit(isoDate);
  }

}
