import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fico-tax-utility';


  @Input() income: string = "";
  @Input() state: string = "AZ";

  taxPaid: number = 0;

  stateTax = {
    "AZ": 0.05,
    "VA": 0.03
  }

  onSubmit() {
    let stateTax = 0;
    switch (this.state) {
      case "AZ":
        stateTax = 0.05;
        break;
      case "VA":
        stateTax = 0.03;
        break;
    }
    this.taxPaid = (Number(this.income)) * stateTax;
  }
}
