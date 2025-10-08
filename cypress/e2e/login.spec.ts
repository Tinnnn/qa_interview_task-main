describe('Sauce Demo Login Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should load the login screen successfully', () => {
    cy.url().should('eq', 'https://www.saucedemo.com/');
    
    cy.get('[data-test="username"]').should('be.visible');
    cy.get('[data-test="password"]').should('be.visible');
    cy.get('[data-test="login-button"]').should('be.visible');
    
    cy.get('.login_logo').should('contain.text', 'Swag Labs');
    
    cy.get('.login_credentials_wrap').should('be.visible');
    cy.get('.login_credentials_wrap').should('contain.text', 'Accepted usernames');
    
    cy.get('[data-test="username"]').should('have.attr', 'placeholder', 'Username');
    cy.get('[data-test="password"]').should('have.attr', 'placeholder', 'Password');
    
    cy.get('[data-test="login-button"]').should('have.value', 'Login');
  });

  it('should display all login page elements', () => {
    cy.get('.login_logo').should('be.visible');
    
    cy.get('.login_wrapper').within(() => {
      cy.get('.login_wrapper-inner').should('be.visible');
      cy.get('.form_column').should('be.visible');
      cy.get('.login-box').should('be.visible');
    });
  });
});