import LoginPageTestCases from "../integration/LoginPage/LoginPageTestCases"

const loginPageTests = new LoginPageTestCases

describe('All Tests', () => {
  loginPageTests.loginPageTests();
})