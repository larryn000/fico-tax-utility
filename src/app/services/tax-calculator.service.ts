import { Injectable } from '@angular/core';
import { StateInformation } from '../constants/state-taxes';

@Injectable({
  providedIn: 'root'
})
export class TaxCalculatorService {

  calculateTaxes(income: number, selectedState: string, extraValue?: number): number {
    switch (selectedState) {
      case 'AZ':
        return extraValue ? (income - extraValue ) * 0.05 : income * 0.05;
      case 'VA':
        return extraValue ? (income - (extraValue * 200)) * 0.03 : income * 0.03;
      default:
        return 0;
    }
  }
}
