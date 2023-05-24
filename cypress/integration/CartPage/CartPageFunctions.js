/// <reference types="Cypress" />

import MainPageUtils from '../MainPageUtils';
import CartPageUtils from './CartPageUtils';

class CartPageFunctions {
  addProductsToCart() {
    MainPageUtils.addBackpackToCartButton.click();
    MainPageUtils.addTshirtToCartButton.click();
  }

  testAddedProductsToCart() {
    CartPageUtils.cartIconNumber.should('be.visible').contains('2');
    CartPageUtils.cartIconNumber.click();
    CartPageUtils.removeBackpackFromCartButton.should('be.visible');
    CartPageUtils.removeTshirtFromCartButton.should('be.visible');
  }

  removeProductsFromCart() {
    CartPageUtils.cartIconNumber.click();
    CartPageUtils.removeBackpackFromCartButton.click();
    CartPageUtils.removeTshirtFromCartButton.click();
  }

  testRemoveProductsFromCart() {
    CartPageUtils.cartIconNumber.should('not.exist');
  }

  checkout() {
    CartPageUtils.checkoutButton.click();
  }

  testCheckout() {
    CartPageUtils.checkoutButton.should('not.exist');
  }

  continue() {
    CartPageUtils.continueButton.click();
  }

  testContinue() {
    CartPageUtils.continueButton.should('be.visible');
  }

  fillCheckout() {
    CartPageUtils.firstName.type('Rares');
    CartPageUtils.lastName.type('Gherman');
    CartPageUtils.postalCode.type('123456');
  }

  finish() {
    CartPageUtils.finishButton.click();
  }

  backHome() {
    CartPageUtils.backHomeButton.should('be.visible');
  }
}

export default new CartPageFunctions();
