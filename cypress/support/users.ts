export const validUser = {
  username: Cypress.env('VALID_USERNAME'),
  password: Cypress.env('VALID_PASSWORD'),
};

export const invalidUser = {
  username: Cypress.env('INVALID_USERNAME'),
  password: Cypress.env('INVALID_PASSWORD'),
};