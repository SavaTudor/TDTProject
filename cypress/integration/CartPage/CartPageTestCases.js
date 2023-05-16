/// <reference types="Cypress" />

import LoginPageFunctions from '../LoginPage/LoginPageFunctions';
import CartPageFunctions from './CartPageFunctions';

class CartPageTestCases {
  startTests() {
    describe('3. Cart page tests', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        LoginPageFunctions.login();
        LoginPageFunctions.testLoginSuccess();
      });

      it('3.1 Test add to cart', () => {
        CartPageFunctions.addProductsToCart();
        CartPageFunctions.testAddedProductsToCart();
      });

      it('3.2 Test remove from cart', () => {
        CartPageFunctions.addProductsToCart();
        CartPageFunctions.removeProductsFromCart();
        CartPageFunctions.testRemoveProductsFromCart();
      });
    });
  }
}

export default new CartPageTestCases();
