/ <reference types="Cypress" / >
  context("Window", () => {
    beforeEach(() => {
      cy.setCookie(
        "_svs",
        "%7B%22c%22%3A%7B%221%22%3Atrue%2C%222%22%3Atrue%2C%223%22%3Atrue%7D%2C%22ct%22%3A1552890595789%2C%22e%22%3A%7B%2210%22%3A%7B%22group%22%3A12%2C%22sent%22%3Atrue%7D%2C%22103%22%3A%7B%22group%22%3A105%2C%22sent%22%3Atrue%7D%2C%22107%22%3A%7B%22group%22%3A109%2C%22sent%22%3Atrue%7D%2C%22111%22%3A%7B%22group%22%3A113%2C%22sent%22%3Atrue%7D%2C%22115%22%3A%7B%22group%22%3A116%2C%22sent%22%3Atrue%7D%2C%22133%22%3A%7B%22group%22%3A135%2C%22sent%22%3Atrue%7D%2C%22144%22%3A%7B%22group%22%3A147%2C%22sent%22%3Atrue%7D%2C%22148%22%3A%7B%22group%22%3A149%2C%22sent%22%3Atrue%7D%7D%2C%22v%22%3A1%2C%22p%22%3A%7B%220%22%3A1574379458039%2C%227%22%3A1574379458041%2C%2213%22%3A1570545494226%2C%224242%22%3A1574379458040%7D%7D"
      );
      cy.visit("https://www.ns.nl/producten/en/s/enkele-reis");
      // cy.viewport(320, 568);
    });

    it("must be possible to travel from Amsterdam to Utrecht", () => {
      cy.title().should("include", "One-way ticket");
      // cy.get('[data-test-id="TOTAL_PRICE"]').should("have.value", "");
      cy.get('[data-test-id="TRAVEL_DATE_TODAY"]').click();
      cy.get('[data-test-id="ORIGIN"]').type("Utrecht Centraal");
      cy.get('[data-test-id="DESTINATION"]').type("Houten Castellum");
      cy.get('[data-test-id="FIRST_CLASS"]').click();

      // cy.get('[data-test-id="NUMBER_OF_ADULTS"]').type("2");
      // cy.get('[data-test-id="ADD_ADULT"]').click();
      // Persoonsgegevens
      // cy.get('[data-custom-id="delivery_homeprint_mrp_1"]').within(() => {
      //   cy.get('[data-test-id="INITIALS"]').type("D");
      //   cy.get('[data-test-id="NAME"]').type("Duck");
      // });
      // cy.get('[data-custom-id="delivery_homeprint_mrp_2"]').within(() => {
      //   cy.get('[data-test-id="INITIALS"]').type("K");
      //   cy.get('[data-test-id="NAME"]').type("Duck");
      // });
      // cy.get('[data-test-id="TOTAL_PRICE"]').should("not.have.value", "€ 0,00");
      // cy.get('[data-test-id="TOTAL_PRICE"]').should("not.have.value", "€ 8,48");
      // cy.get('[name="addProduct"]').click();
    });
  });
