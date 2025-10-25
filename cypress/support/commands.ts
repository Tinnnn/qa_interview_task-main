import { loginPage, header } from '../pages';

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
    login(username: string, password: string): Cypress.Chainable<any>;
    logout(): Cypress.Chainable<any>;
    }
  }
}

Cypress.Commands.add('login', (username: string, password: string) => {
  loginPage.visit();
  return loginPage.login(username, password);
});

Cypress.Commands.add('logout', () => {
  return header.logout();
});

export {};