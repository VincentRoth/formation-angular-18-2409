import { PhonePipe } from './phone.pipe';

fdescribe('PhonePipe', () => {
  it('create an instance', () => {
    const pipe = new PhonePipe();
    expect(pipe).toBeTruthy();
  });

  it('should transform a value with default separator', () => {
    const pipe = new PhonePipe();
    const input = '01.23.45.67.89';
    const output = '01 23 45 67 89';
    expect(pipe.transform(input)).toBe(output);
  });

  it('should transform a value with defined separator', () => {
    const pipe = new PhonePipe();
    const input = '01.23.45.67.89';
    const output = '01-23-45-67-89';
    expect(pipe.transform(input, '-')).toBe(output);
  });

  it('should not transform a value with nothing to replace', () => {
    const pipe = new PhonePipe();
    const input = '0123456789';
    expect(pipe.transform(input)).toBe(input);
  });

  it('should handle undefined value', () => {
    const pipe = new PhonePipe();
    expect(pipe.transform(undefined)).toBe(undefined);
  });
});
