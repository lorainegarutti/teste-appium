var assert = require('assert');

describe('My Simple test', () => {
    it('super test', () => {
      // For demo purpose
      browser.pause(2000);
      browser.getElementCSSValue('#9fc3a2ce-4bc7-47b9-aea6-88d172d07dd3', 'webdriver')
      console.log('Hey, I ran!');
    });
  });