/// <reference types="Cypress" />

import MainPageUtils from '../MainPageUtils';
import LoginPageUtils from './LoginPageUtils';

let values = require('./LoginPageValues.json');

class LoginPageFunctions {
  validateLoginPageDesign() {
    LoginPageUtils.logo
      .should('be.visible')
      .should('contain.text', values.logo);
    LoginPageUtils.loginContainer.should('be.visible');
    LoginPageUtils.usernameField.should('be.visible').should('be.empty');
    LoginPageUtils.passwordField.should('be.visible').should('be.empty');
  }

  login() {
    LoginPageUtils.usernameField.type('standard_user');
    LoginPageUtils.passwordField.type('secret_sauce');
    LoginPageUtils.loginButton.click();
  }

  testLoginSuccess() {
    MainPageUtils.cartButton.should('be.visible');
    MainPageUtils.inventoryContainer.should('be.visible');
  }

  loginOnlyUsername(){
    LoginPageUtils.usernameField.type(values.standardUser);
    LoginPageUtils.loginButton.click();
    this.testLoginFail(values.passwordRequiredMessage)
  }

  loginOnlyPassword(){
    LoginPageUtils.passwordField.type(values.validPassword);
    LoginPageUtils.loginButton.click();
    this.testLoginFail(values.usernameRequiredMessage)
  }

  testLoginFail(error){
    LoginPageUtils.errorMessage.should('contain.text', error);
  }

  loginWrongCredentials(){
    LoginPageUtils.usernameField.type(values.standardUser);
    LoginPageUtils.passwordField.type(values.wrongPassword);
    LoginPageUtils.loginButton.click();
    this.testLoginFail(values.wrongCredentialsMessage)
  }

  loginNoCredentials(){
    LoginPageUtils.loginButton.click();
    this.testLoginFail(values.usernameRequiredMessage)
  }
}

export default new LoginPageFunctions();
