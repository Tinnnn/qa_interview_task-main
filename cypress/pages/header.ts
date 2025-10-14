export class Header {
  menuButton = '#react-burger-menu-btn';
  logoutLink = '#logout_sidebar_link';

  openMenu() {
    cy.get(this.menuButton).click();
  }

  logout() {
    this.openMenu();
    cy.get(this.logoutLink).click();
  }
}