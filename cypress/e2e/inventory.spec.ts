import { loginPage, inventoryPage, cartPage, header } from '../support/pageObjects';
import { validUser } from '../support/users';
import products from '../fixtures/products.json';

describe('Inventory Page Component Verification', () => {
  before(() => {
    loginPage.visit();
    loginPage.login(validUser.username, validUser.password);
  });

  it('should display list of products with name, price, and description', () => {
    inventoryPage.assertInventoryPageLoaded();
    inventoryPage.assertEachProductComponents();
  });

  after(() => {
  header.logout();
  });

});


describe('Add to Cart Functionality', () => {
  beforeEach(() => {
    loginPage.visit();
    loginPage.login(validUser.username, validUser.password);
  });

    afterEach(() => {
    cartPage.clearCart();
    header.logout();
  });
  
  it('should add a product to the cart and change Add to cart button to Remove', () => {
    inventoryPage.addProductToCartByName(products.backpack);
    inventoryPage.assertButtonChangedToRemove(products.backpack);
    inventoryPage.assertCartCount(1);
  });

  it('should allow adding multiple different products to cart', () => {
    Object.values(products).forEach((productName, index) => {
    inventoryPage.addProductToCartByName(productName);
    inventoryPage.assertCartCount(index + 1);
    });
  });
});