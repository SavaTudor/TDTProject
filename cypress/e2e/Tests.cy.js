import CartPageTestCases from '../integration/CartPage/CartPageTestCases';

import LoginPageTestCases from '../integration/LoginPage/LoginPageTestCases';
import CheckoutPageTestCases from '../integration/CheckoutPage/CheckoutPageTestCases';

describe('All Tests', () => {
  LoginPageTestCases.startTests();
  CartPageTestCases.startTests();
    CheckoutPageTestCases.startTests();
});
