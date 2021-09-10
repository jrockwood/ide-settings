import { Example } from '../src/Example';

describe('Example', () => {
  describe('toString()', () => {
    it('should return the right value', () => {
      const example = new Example();
      expect(example.toString()).toBe('Example!');
    });

    it('should use a custom Jasmine matcher from jasmine-expect', () => {
      const example = new Example();
      expect(example.toString()).toStartWith('Ex');
    });
  });
});
