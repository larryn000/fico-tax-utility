import { TestBed } from '@angular/core/testing';
import { TaxCalculatorService } from './tax-calculator.service';


describe('TaxCalculatorService', () => {
  let service: TaxCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TaxCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should calculate AZ tax correctly', () => {
    const result = service.calculateTaxes(1000, 'AZ', 500);
    expect(result).toBe(25);
  });

  it('should calculate VA tax correctly', () => {
    const result = service.calculateTaxes(2000, 'VA', 5);
    expect(result).toBe(30);
  });

  it('should return 0 for unknown state', () => {
    const result = service.calculateTaxes(500, 'NY');
    expect(result).toBe(0);
  });

  it('should handle zero income', () => {
    const result = service.calculateTaxes(0, 'AZ');
    expect(result).toBe(0);
  });  
});
