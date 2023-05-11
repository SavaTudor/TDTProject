/// <reference types="Cypress" />

class LoginPageObjects {
    getLogo() {
        return cy.get(".login_logo")
    }

    getLoginContainer() {
        return cy.get("#login_button_container")
    }

    getUsernameField() {
        return cy.get("#user-name")
    }

    getPasswordField() {
        return cy.get("#password")
    }

    getLoginButton() {
        return cy.get("#login-button")
    }
}

export default LoginPageObjects