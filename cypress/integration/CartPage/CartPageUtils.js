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
}

export default new CartPageUtils();
