const {generateRandomNumber} = require('../randomNumber');

describe('generateRandomNumber', () => {
   test('should generate a random number', () => {
       // FIXME, the randomNumber variable should be const randomNumber = generateRandomNumber();
      const randomNumber = generateRandomNumber();
      expect(randomNumber).toBeGreaterThan(0);
   });
});
