export class LoginPage {
  usernameField = '[data-test="username"]';
  passwordField = '[data-test="password"]';
  loginButton = '[data-test="login-button"]';
  loginError = '[data-test="error"]';
  loginLogo = '.login_logo';
  acceptedUsersInfo = '.login_credentials_wrap';
  loginWrapper = '.login_wrapper';

  visit() {
    cy.visit('/');
  }

  assertLoginPageLoaded() {
    cy.url().should('eq', 'https://www.saucedemo.com/');
    cy.get(this.usernameField).should('be.visible');
    cy.get(this.passwordField).should('be.visible');
    cy.get(this.loginButton).should('be.visible');
    cy.get(this.loginLogo).should('contain.text', 'Swag Labs');
    cy.get(this.acceptedUsersInfo)
      .should('be.visible')
      .and('contain.text', 'Accepted usernames');
    cy.get(this.usernameField).should('have.attr', 'placeholder', 'Username');
    cy.get(this.passwordField).should('have.attr', 'placeholder', 'Password');
    cy.get(this.loginButton).should('have.value', 'Login');
  }
  assertLoginPageElements() {
    cy.get(this.loginLogo).should('be.visible');
    cy.get(this.loginWrapper).within(() => {
      cy.get('.login_wrapper-inner').should('be.visible');
      cy.get('.form_column').should('be.visible');
      cy.get('.login-box').should('be.visible');
    });
  }

  login(username: string, password: string) {
    cy.get(this.usernameField).clear().type(username);
    cy.get(this.passwordField).clear().type(password);
    cy.get(this.loginButton).click();
  }

  assertSuccessfulLogin() {
    cy.url().should('include', '/inventory.html');
  }

  assertErrorMessage(expectedMessage: string) {
    cy.get(this.loginError).should('be.visible').and('contain.text', expectedMessage);
  }
}