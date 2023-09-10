import { Component } from '@angular/core';

@Component({
  selector: 'app-number-adder',
  templateUrl: './number-adder.component.html',
  styleUrls: ['./number-adder.component.css']
})
export class NumberAdderComponent {
public Name="Azzak";
  number1: number = 0;
  number2: number = 0;
  total: number = 0;

  calculateTotal() {
    this.total = this.number1 + this.number2;
  }

  clearFields() {
    this.number1 = 0;
    this.number2 = 0;
    this.total = 0;
  }

}
