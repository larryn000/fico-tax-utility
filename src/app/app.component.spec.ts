import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TaxCalculatorService } from './services/tax-calculator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { STATE_TAXES } from './constants/state-taxes';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let taxService: TaxCalculatorService;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        FormsModule, 
        MatInputModule, 
        MatOptionModule, 
        MatSelectModule, 
        MatButtonModule,
        MatCardModule,
        AppComponent
      ],
      providers: [
        TaxCalculatorService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    taxService = TestBed.inject(TaxCalculatorService);
    snackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should calculate result using the service on submit', () => {
    component.income = 1000;
    component.selectedState = STATE_TAXES[0];
    component.extraFieldValue = 500;
    const spy = spyOn(taxService, 'calculateTaxes').and.callThrough();

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(1000, 'AZ', 500);
    expect(component.taxPaid).toEqual(25);
  });

  it('should display error message if income is invalid', () => {
    component.income = -1;
    component.selectedState = STATE_TAXES[0];
    component.extraFieldValue = 500;
    const spy = spyOn(snackBar, 'open');

    component.onSubmit();

    expect(spy).toHaveBeenCalledWith(
      'Please enter a valid income and select a state',
      'Close',
      { duration: 3000, panelClass: ['error-snackbar'] }
    );
  });

});
