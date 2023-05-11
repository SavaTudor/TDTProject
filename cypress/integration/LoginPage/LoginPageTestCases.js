/// <reference types="Cypress" />

import LoginPageFunctions from "./LoginPageFunctions";

const loginPageFunctions = new LoginPageFunctions();

class LoginPageTestCases {
    loginPageTests(){
        describe("1. Login page tests", ()=>{
            beforeEach(()=>{
                cy.visit("https://www.saucedemo.com/")
            })
            it("1.1 Validate login page design", ()=>{
                cy.log("Validating the design of the login page")
                loginPageFunctions.validateLoginPageDesign()
            })
        })
    }
}

export default LoginPageTestCases;