const {generateRandomNumber} = require('../randomNumber');

describe('generateRandomNumber', () => {
   test('should generate a random number', () => {
      const randomNumber = generateRandomNumber();
      expect(randomNumber).toBeGreaterThan(0);
   });
});
