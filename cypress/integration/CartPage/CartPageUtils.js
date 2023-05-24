/// <reference types="Cypress" />

class CartPageUtils {
  get cartIconNumber() {
    return cy.get('.shopping_cart_badge');
  }

  get removeBackpackFromCartButton() {
    return cy.get('#remove-sauce-labs-backpack');
  }

  get removeTshirtFromCartButton() {
    return cy.get('#remove-sauce-labs-bolt-t-shirt');
  }

  get checkoutButton() {
    return cy.get('#checkout');
  }

  get continueButton() {
    return cy.get('#continue');
  }

  get firstName() {
    return cy.get('#first-name');
  }

  get lastName() {
    return cy.get('#last-name');
  }

  get postalCode() {
    return cy.get('#postal-code');
  }

  get finishButton() {
    return cy.get('#finish');
  }

  get backHomeButton() {
    return cy.get('#back-to-products');
  }
}

export default new CartPageUtils();
