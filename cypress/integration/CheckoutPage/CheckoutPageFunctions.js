/// <reference types="Cypress" />

import CartPageUtils from '../CartPage/CartPageUtils';
import CartPageFunctions from '../CartPage/CartPageFunctions';
import CheckoutPageUtils from './CheckoutPageUtils';

class CheckoutPageFunctions {
  goToCheckoutPage() {
    CartPageFunctions.addProductsToCart();
    CartPageUtils.cartIconNumber.click();
    CheckoutPageUtils.checkoutButtonOnCartPage.click()
  }

  fillFirstName(value) {
    CheckoutPageUtils.checkoutFormFirstName.type(value)
  }

  fillLastName(value) {
    CheckoutPageUtils.checkoutFormLastName.type(value)
  }

  fillPostalCode(value) {
    CheckoutPageUtils.checkoutFormPostalCode.type(value)
  }

  testCheckoutProcceedFail() {
    CheckoutPageUtils.checkoutPageErrorMessageContainer.should('be.visible')
  }
  
  testCheckoutProcceedPass() {
    CheckoutPageUtils.checkoutPageErrorMessageContainer.should('not.exist')
  }

  pressCheckoutButton() {
    CheckoutPageUtils.checkoutContinueButton.click()
  }

  reloadPage() {
    CheckoutPageUtils.reloadPage()
  }

  checkInputs(v1, v2, v3) {
    CheckoutPageUtils.checkoutFormFirstName.should('have.value', v1)
    CheckoutPageUtils.checkoutFormLastName.should('have.value', v2)
    CheckoutPageUtils.checkoutFormPostalCode.should('have.value', v3)
  }

}

export default new CheckoutPageFunctions();
