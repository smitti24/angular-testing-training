
// Test Suite
import {CalculatorService} from './calculator.service';
import {TestBed} from '@angular/core/testing';
import {LoggerService} from './logger.service';

describe('CalculatorService', () => {
  let calculator: CalculatorService, loggerSpy: any;

  beforeEach(() => {
    console.log('Calling beforeEach');
    loggerSpy = jasmine.createSpyObj('LoggerService', ['log']);

    TestBed.configureTestingModule({
      providers: [
        CalculatorService,
        {provide: LoggerService, useValue: loggerSpy}
      ]
    });

    // Instantiate service v
    calculator = TestBed.get(CalculatorService);
  });

  it('should add two numbers', () => {
    // Test is not yet done being executed.
    // pending();
    console.log('Calling add test');
    const result = calculator.add(2, 2);
    // Assertion.
    expect(result).toBe(4);

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

  it('should subtract two numbers', () => {
    console.log('Calling subtract test');
    const result = calculator.subtract(2, 2);
    // Assertion.
    expect(result).toBe(0, 'unexpected subtraction result.');

    expect(loggerSpy.log).toHaveBeenCalledTimes(1);
  });

});
