export class CartPage {
  cartItem = '.cart_item';
  cartItemName = '.inventory_item_name';
  removeButton = '[data-test^="remove-"]';
  continueShoppingButton = '[data-test="continue-shopping"]';
  checkoutButton = '[data-test="checkout"]';
  cartIcon = '.shopping_cart_link';

  assertCartItemExists(productName: string) {
    cy.get(this.cartItem)
      .contains(this.cartItemName, productName)
      .should('be.visible');
  }

  assertCartItemNotExists(productName: string) {
    cy.get(this.cartItem)
      .contains(this.cartItemName, productName)
      .should('not.exist');
  }

  removeProductByName(productName: string) {
    cy.get(this.cartItem)
      .contains(this.cartItemName, productName)
      .parents(this.cartItem)
      .find(this.removeButton)
      .click();
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
  cy.get(this.cartItem).each(($item) => {
    cy.wrap($item).find(this.removeButton).click();
  });
}
}