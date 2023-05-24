/// <reference types="Cypress" />

class OverviewPageUtils {
  get logo() {
    return cy.get('.app_logo');
  }

  get inventoryContainer() {
    return cy.get('#inventory_container');
  }

  get inventoryList() {
    return cy.get('.inventory_list');
  }

  get title() {
    return cy.get('.title');
  }

  get sortOptions() {
    return cy.get('[data-test=product_sort_container]');
  }

  get activeSortOption() {
    return cy.get('.active_option');
  }

  get shoppingCartIcon() {
    return cy.get('.shopping_cart_link');
  }
}

export default new OverviewPageUtils();
