import LoginPageFunctions from '../LoginPage/LoginPageFunctions';
import OverviewPageFunctions from './OverviewPageFunctions';

class OverviewPageTestCases {
  startTests() {
    describe('2. Overview page tests', () => {
      beforeEach(() => {
        cy.visit('https://www.saucedemo.com/');
        cy.log('Validating a succesful login');
        LoginPageFunctions.login();
        LoginPageFunctions.testLoginSuccess();
      });

      it('2.1 Check existence of relevant elements in the page', () => {
        cy.log('Validating existence of desired elements');
        OverviewPageFunctions.validateElementsExistence();
      });

      it('2.2 Test if the products count remains the same after sorting', () => {
        cy.log('Validate Products Count before sorting');
        OverviewPageFunctions.testProductsCount();

        cy.log('Validate Products Count after sorting Z to A');
        OverviewPageFunctions.sortProductsDescending();
        OverviewPageFunctions.testProductsCount();

        cy.log('Validate Products Count after sorting back to A to Z');
        OverviewPageFunctions.sortProductsAscending();
        OverviewPageFunctions.testProductsCount();

        cy.log('Validate Products Count after sorting by low to high price');
        OverviewPageFunctions.sortProductsLowToHigh();
        OverviewPageFunctions.testProductsCount();

        cy.log('Validate Products Count after sorting by high to low price');
        OverviewPageFunctions.sortProductsHighToLow();
        OverviewPageFunctions.testProductsCount();
      });

      it('2.3 Test if the products get sorted correctly', () => {
        cy.log('Testing the initial sorting of the products');
        OverviewPageFunctions.testAscendingSort();

        cy.log('Testing if Z to A sorting works as expected');
        OverviewPageFunctions.sortProductsDescending();
        OverviewPageFunctions.testDescendingSort();

        cy.log('Testing if Low to High price sorting works as expected');
        OverviewPageFunctions.sortProductsLowToHigh();
        OverviewPageFunctions.testLowToHighSort();

        cy.log('Testing if High to Low price sorting works as expected');
        OverviewPageFunctions.sortProductsHighToLow();
        OverviewPageFunctions.testHighToLowSort();
      });
    });
  }
}

export default new OverviewPageTestCases();
