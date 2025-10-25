import { loginPage } from '../pages';
import { validUser, invalidUser } from '../support/users';

describe('Sauce Demo Login Page', () => {
 beforeEach(() => {
    loginPage.visit();
  });

  it('should load the login screen successfully', () => {
    loginPage.assertLoginPageLoaded();
  });

  it('should display all login page elements', () => {
    loginPage.assertLoginPageElements();
  });

  it('should login successfully with valid credentials', () => {
    cy.login(validUser.username, validUser.password);
    cy.logout();
  });

  it('should not login user with invalid credentials', () => {
    loginPage.login(invalidUser.username, invalidUser.password);
    loginPage.assertErrorMessage('Username and password do not match any user in this service');
  });
});