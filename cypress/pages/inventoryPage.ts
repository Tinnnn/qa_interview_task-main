export class InventoryPage {
  productList = '.inventory_list';
  productItem = '.inventory_item';
  productName = '.inventory_item_name';
  productDesc = '.inventory_item_desc';
  productPrice = '.inventory_item_price';
  addToCartButton = '[data-test^="add-to-cart"]';
  removeFromCartButton = '[data-test^="remove"]';
  cartBadge = '.shopping_cart_badge';
  cartIcon = '.shopping_cart_link';


  assertInventoryPageLoaded() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.productList).should('be.visible');
  }

  assertEachProductComponents() {
    cy.get(this.productItem).each(($el) => {
      cy.wrap($el).within(() => {
        cy.get(this.productName).should('be.visible');
        cy.get(this.productDesc).should('be.visible');
        cy.get(this.productPrice).should('be.visible');
      });
    });
  }

   addProductToCartByName(productName: string) {
    cy.contains(this.productItem, productName).within(() => {
      cy.get(this.addToCartButton).click();
    });
  }

  removeProductFromCartByName(productName: string) {
    cy.contains(this.productItem, productName).within(() => {
      cy.get(this.removeFromCartButton).click();
    });
  }

  assertCartCount(expectedCount: number) {
    if (expectedCount > 0) {
      cy.get(this.cartBadge).should('have.text', expectedCount.toString());
    } else {
      cy.get(this.cartBadge).should('not.exist');
    }
  }

  assertButtonChangedToRemove(productName: string) {
    cy.contains(this.productItem, productName).within(() => {
      cy.get(this.removeFromCartButton).should('be.visible');
    });
  }

  goToCart() {
  cy.get(this.cartIcon).click();
}


}