import { loginPage, inventoryPage, cartPage } from '../pages';
import { validUser } from '../support/users';
import products from '../fixtures/products.json';

describe('Cart Functionality', () => {
  beforeEach(() => {
    cy.login(validUser.username, validUser.password);

    // Add products to cart
    inventoryPage.addProductToCartByName(products.backpack);
    inventoryPage.addProductToCartByName(products.boltTshirt);

    // Go to cart
    inventoryPage.goToCart();
    cartPage.assertCartPageLoaded();
  });

  afterEach(() => {
    cartPage.clearCart();
    cy.logout(); 
  });

  it('should display correct cart items', () => {
    cartPage.assertCartItemExists(products.backpack);
    cartPage.assertCartItemExists(products.boltTshirt);
  });

  it('should allow removing a product from cart', () => {
    cartPage.removeProductByName(products.backpack);
    cartPage.removeProductByName(products.boltTshirt);
    cartPage.assertCartItemNotExists(products.backpack);
    cartPage.assertCartItemNotExists(products.boltTshirt);
  });

  it('should allow navigating back to the product list page', () => {
    cartPage.goBackToProducts();
    inventoryPage.assertInventoryPageLoaded();
  });

  it('should allow proceeding to the checkout page', () => {
    cartPage.proceedToCheckout();
    cy.url().should('include', '/checkout-step-one');
    cy.get('[data-test="firstName"]').should('be.visible');
    cy.get('[data-test="lastName"]').should('be.visible');
    cy.get('[data-test="postalCode"]').should('be.visible');
  });
});