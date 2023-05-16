import CartPageTestCases from '../integration/CartPage/CartPageTestCases';
import LoginPageTestCases from '../integration/LoginPage/LoginPageTestCases';

describe('All Tests', () => {
  LoginPageTestCases.startTests();
  CartPageTestCases.startTests();
});
