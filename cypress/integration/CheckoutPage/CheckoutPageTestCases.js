/// <reference types="Cypress" />

import LoginPageFunctions from '../LoginPage/LoginPageFunctions';
import CheckoutPageFunctions from './CheckoutPageFunctions';

class CheckoutPageTestCases {
  startTests() {
    describe('3. Cart page tests', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPageFunctions.login();

        LoginPageFunctions.testLoginSuccess();
        CheckoutPageFunctions.goToCheckoutPage()
      });

      it('Test happy path should pass', () => {
        CheckoutPageFunctions.fillFirstName("Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111")
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedPass()
      });

      it('Test everything with blank input should fail', () => {
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedFail()
      });

      it('Test with space in first name should pass', () => {
        CheckoutPageFunctions.fillFirstName("Test Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111")
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedPass()
      });

      it('Test happy path should pass', () => {
        CheckoutPageFunctions.fillFirstName("Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111")
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedPass()
      });

      it('Test reloading page should pass', () => {
        CheckoutPageFunctions.fillFirstName("Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111")
        CheckoutPageFunctions.reloadPage()
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.checkInputs("Test", "Test", "111111")
      });

      it('Test with characters in postal code', () => {
        CheckoutPageFunctions.fillFirstName("Test Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111aa211")
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedFail()
      });

      it('Test with special characters in the first name should pass', () => {
        CheckoutPageFunctions.fillFirstName("Test#@ Test")
        CheckoutPageFunctions.fillLastName("Test")
        CheckoutPageFunctions.fillPostalCode("111111")
        CheckoutPageFunctions.pressCheckoutButton()
        CheckoutPageFunctions.testCheckoutProcceedPass()
      });
    });
  }
}

export default new CheckoutPageTestCases();
