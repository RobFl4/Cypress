/ <reference types="Cypress" / >
  beforeEach("Demo Web Shop", () => {
    cy.visit("http://demowebshop.tricentis.com/");
    cy.title().should("include", "Demo Web Shop");
    // cy.viewport(320, 568);
  });

// afterEach(function() {
//   cy.get('[class="cart-label"]')
//     .contains("Shopping cart")
//     .click();
//   cy.get('[class="itemquantity1087343"]').clear();
//   cy.pause();
// });

it("must be possible to order a product", () => {
  // it must be possible to log in
  cy.get('[class="ico-login"]').click();
  cy.get("#Email").type("dduck@gmail.com");
  cy.get("#Password").type("D0nald");
  cy.get('[class*="login-button"]')
    .contains("Log in")
    .click();
  cy.get('[class*="account"]').contains("dduck@gmail.com");

  // it should be possible to see the content of the shopping basket
  cy.get('[class="cart-label"]')
    .contains("Shopping cart")
    .click();
  cy.get('[class="cart-qty"]').contains("0");
  cy.get('[class="page-title"]').contains("Shopping cart");
  cy.get('[class="page-body"]').contains("Your Shopping Cart is empty!");

  // it should be possible to order a book
  cy.visit("/books");
  cy.get('img[alt="Picture of Computing and Internet"]').click();
  cy.get("#addtocart_13_EnteredQuantity")
    .clear()
    .type("5");
  cy.get("#add-to-cart-button-13").click();

  // it should be possible to see the content of the shopping basket
  cy.get('[class="cart-qty"]').contains("5");
  cy.get('[class="close"]').click();
  cy.wait(500)
    .get('[class="cart-label"]')
    .contains("Shopping cart")
    .click();
  cy.get('[class="product-unit-price"]').contains("10.00");
  cy.get('[class="product-subtotal"]').contains("50.00");
  cy.get('[class="product-price order-total"]').contains("50.00");

  // pay for the book
  cy.get("#termsofservice").click();
  cy.get("#checkout").click();
  cy.pause();
});
