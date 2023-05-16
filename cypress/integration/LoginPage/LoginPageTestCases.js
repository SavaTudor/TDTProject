/// <reference types="Cypress" />

import LoginPageFunctions from './LoginPageFunctions';

class LoginPageTestCases {
  startTests() {
    describe('1. Login page tests', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
      });

      it('1.1 Validate login page design', () => {
        cy.log('Validating the design of the login page');
        LoginPageFunctions.validateLoginPageDesign();
      });

      it('1.2 Test login success', () => {
        LoginPageFunctions.login();
        LoginPageFunctions.testLoginSuccess();
      });
    });
  }
}

export default new LoginPageTestCases();
