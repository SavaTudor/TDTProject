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
}

export default new CartPageFunctions();
