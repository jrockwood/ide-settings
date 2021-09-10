import { Example } from '../src/Example';

describe('Example', () => {
  describe('toString()', () => {
    it('should return the right value', () => {
      const example = new Example();
      expect(example.toString()).toBe('Example!');
    });
  });
});
