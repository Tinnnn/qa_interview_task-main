export const validUser = {
  username: Cypress.env('VALID_USERNAME'),
  password: Cypress.env('VALID_PASSWORD'),
};

export const lockedOutUser = {
  username: Cypress.env('LOCKEDOUT_USERNAME'),
  password: Cypress.env('LOCKEDOUT_PASSWORD'),
};