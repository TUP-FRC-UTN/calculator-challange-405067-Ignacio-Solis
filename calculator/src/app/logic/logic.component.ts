import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-logic',
  standalone: true,
  imports: [],
  templateUrl: './logic.component.html',
  styleUrl: './logic.component.css'
})
export class LogicComponent {
  @Input() value1 = 0
  @Input() value2 = 0
  @Output() result = new EventEmitter<number>();
  @Output() shouldClear = new EventEmitter<boolean>();
  calculateSum() {
    this.result.emit(this.value1+this.value2);
  }
  calculateDifference() {
    this.result.emit(this.value1-this.value2)
  }
  calculatePower() {
    this.result.emit(this.value1**this.value2)
  }
  calculateMultiply() {
    this.result.emit(this.value1*this.value2)
  }
  calculateDivision() {
    this.result.emit(this.value1 / this.value2)
  }

  clear() {
    this.shouldClear.emit();
  }
}
