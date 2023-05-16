/// <reference types="Cypress" />

class LoginPageUtils {
  get logo() {
    return cy.get('.login_logo');
  }

  get loginContainer() {
    return cy.get('#login_button_container');
  }

  get usernameField() {
    return cy.get('#user-name');
  }

  get passwordField() {
    return cy.get('#password');
  }

  get loginButton() {
    return cy.get('#login-button');
  }
}

export default new LoginPageUtils();
