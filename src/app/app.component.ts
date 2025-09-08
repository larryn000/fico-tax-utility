import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { STATE_TAXES, StateInformation } from './constants/state-taxes';

@Component({
  selector: 'app-root',
  imports: [
    CommonModule, 
    FormsModule, 
    MatInputModule, 
    MatOptionModule, 
    MatSelectModule, 
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  @Input() income: number = 0;
  @Input() selectedState: StateInformation | undefined;

  title = 'fico-tax-utility';
  stateTaxes = STATE_TAXES;

  taxPaid: number | null = null;

  constructor(private snackBar: MatSnackBar) {}

  onSubmit() {
    if (this.income < 0 || !this.income || !this.selectedState) {
      this.snackBar.open('Please enter a valid income and select a state', 'Close', {
        duration: 3000,
        panelClass: ['error-snackbar'],
      });
      return;
    }

    this.taxPaid = (Number(this.income)) * this.selectedState?.tax;
  }
}
