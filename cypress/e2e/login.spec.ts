import { loginPage, header } from '../support/pageObjects';
import { validUser, lockedOutUser } from '../support/users';

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
    loginPage.login(validUser.username, validUser.password);
    loginPage.assertSuccessfulLogin();
    header.logout();
  });

  it('should not login user with invalid credentials', () => {
    loginPage.login(lockedOutUser.username, lockedOutUser.password);
    loginPage.assertErrorMessage('Sorry, this user has been locked out.');
  });
});