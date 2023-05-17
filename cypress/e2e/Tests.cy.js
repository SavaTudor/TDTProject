import CartPageTestCases from '../integration/CartPage/CartPageTestCases';
import LoginPageTestCases from '../integration/LoginPage/LoginPageTestCases';
import OverviewPageTestCases from '../integration/OverviewPage/OverviewPageTestCases';

describe('All Tests', () => {
  LoginPageTestCases.startTests();
  CartPageTestCases.startTests();
  OverviewPageTestCases.startTests();
});
