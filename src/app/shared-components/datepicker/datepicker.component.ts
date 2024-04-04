import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {

  @Output() dateChanged = new EventEmitter<string>();
  @Input() displaDate = '';
  date: string = '';

  ngOnInit(): void {
    this.date = this.displaDate
  }

  onDateChange(event: any) {
    this.date = event.target.value;
    const isoDate = new Date(this.date).toISOString()
    this.dateChanged.emit(isoDate);
    console.log(isoDate)
  }


}
