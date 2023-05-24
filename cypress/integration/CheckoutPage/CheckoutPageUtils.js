/// <reference types="Cypress" />

class CheckoutPageUtils {
    get checkoutFormFirstName() {
      return cy.get('#first-name');
    }
  
    get checkoutFormLastName() {
      return cy.get('#last-name');
    }
  
    get checkoutFormPostalCode() {
      return cy.get('#postal-code');
    }

    get checkoutButtonOnCartPage() {
        return cy.get('#checkout');
    }

    get checkoutPageErrorMessageContainer() {
        return cy.get(".error-message-container")
    }

    get checkoutContinueButton() {
        return cy.get("#continue")
    }

    get reloadPage() {
        return cy.reload()
    }
  }
  
  export default new CheckoutPageUtils();
  