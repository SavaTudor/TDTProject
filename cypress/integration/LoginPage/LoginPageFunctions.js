/// <reference types="Cypress" />

import LoginPageObjects from "./LoginPageObjects";

const objects = new LoginPageObjects
let values = require("./LoginPageValues.json");

class LoginPageFunctions {

    validateLoginPageDesign() {
        objects.getLogo().should('be.visible').should('contain.text', values.logo)
        objects.getLoginContainer().should('be.visible')
        objects.getUsernameField().should('be.visible').should('be.empty')
        objects.getPasswordField().should('be.visible').should('be.empty')
    }

}

export default LoginPageFunctions;