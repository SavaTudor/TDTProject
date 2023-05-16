/// <reference types="Cypress" />

class MainPageUtils {
  get cartButton() {
    return cy.get('#shopping_cart_container');
  }

  get inventoryContainer() {
    return cy.get('#inventory_container');
  }

  get addBackpackToCartButton() {
    return cy.get('#add-to-cart-sauce-labs-backpack');
  }

  get addTshirtToCartButton() {
    return cy.get('#add-to-cart-sauce-labs-bolt-t-shirt');
  }
}

export default new MainPageUtils();
