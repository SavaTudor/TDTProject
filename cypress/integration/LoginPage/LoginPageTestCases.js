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
        cy.log('Validating a succesful login');
        LoginPageFunctions.login();
        LoginPageFunctions.testLoginSuccess();
      });
      it('1.3 Test login with only username', ()=>{
        cy.log('Validating a login with only the username filled');
        LoginPageFunctions.loginOnlyUsername();
      })
      it('1.4 Test login with only password', ()=>{
        cy.log('Validating a login with only the password filled');
        LoginPageFunctions.loginOnlyPassword();
      })
      it('1.5 Test login with wrong credentials', ()=>{
        cy.log('Validating a login with wrong credentials');
        LoginPageFunctions.loginWrongCredentials();
      })
      it('1.6 Test login without any credentials', ()=>{
        cy.log('Validating a login without any credentials');
        LoginPageFunctions.loginNoCredentials();
      })
    });
  }
}

export default new LoginPageTestCases();
