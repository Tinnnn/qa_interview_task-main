export class CartPage {
  cartItem = '[data-test="inventory-item"]';
  cartItemName = '[data-test="inventory-item-name"]';
  removeButton = '[data-test^="remove-"]';
  continueShoppingButton = '[data-test="continue-shopping"]';
  checkoutButton = '[data-test="checkout"]';
  cartIcon = '[data-test="shopping-cart-link"]';

  assertCartItemExists(productName: string) {
    cy.contains(this.cartItemName, productName).should('be.visible');
  }

  assertCartItemNotExists(productName: string) {
    cy.contains(this.cartItemName, productName).should('not.exist');
  }

  removeProductByName(productName: string) {
    cy.contains(this.cartItem, productName).within(() => {
      cy.get(this.removeButton).click();
    });
  }

  goBackToProducts() {
    cy.get(this.continueShoppingButton).click();
  }

  proceedToCheckout() {
    cy.get(this.checkoutButton).click();
  }

  assertCartPageLoaded() {
    cy.url().should('include', '/cart.html');
    cy.get(this.cartItem).should('exist');
  }

clearCart() {
  cy.get(this.cartIcon).click();

  // Check if there are items in the cart before attempting to clear
  cy.get('body').then(($body) => {
    if ($body.find(this.cartItem).length > 0) {
      cy.get(this.cartItem).each(($item) => {
        cy.wrap($item).within(() => {
          cy.get(this.removeButton).click();
        });
      });
    } else {
      cy.log('Cart is already empty.');
    }
  });
}
}