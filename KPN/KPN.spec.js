import "@testing-library/cypress/add-commands";

describe("Alles voor thuis", () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true);
    cy.clearCookies();
    cy.viewport(320, 568);
    cy.wait(500);
  });

  it("Should go through the flow and order a product", () => {
    cy.visit("https://kpn.com");
    cy.log("Hello KPN");
    // clear cookies again after visiting to remove
    // cy.pause();
    // cy.get('[class*="KPN_cookie_button KPN_cookie_personal"]').click();
    // A/B test
    // cy.get('[class*="template-item toptask-collapsible-block"]').within(() => {
    // cy.findByText("Nieuw: kpn Hussel");
    // cy.get('[class*="btn-primary"]')
    //   .should("be.visible")
    //   .contains("Alles over kpn Hussel")
    //   .click({ force: true });
    // cy.get('[class*="btn-primary"]')
    //   .should("be.visible")
    //   .contains("Alles over Thuis")
    //   .click({ force: true });
    // });

    cy.findByText(/aanbod/i).click();
    // cy.findByText("Telefoons").click();
    // cy.findByText("Abonnementen").click();
    // cy.get('a[href*="/mobiel-abonnement.htm"]').click();
    // <a class="sublevel-list-link" href="/mobiel-abonnement.htm" title="">Abonnementen</a>
    cy.get('a[href*="/mobiel-abonnement.htm"]')
      .contains("Abonnementen")
      .click();
    // cy.get('a[href*="/5g.htm"]').click();
    // <a href="https://www.kpn.com/netwerk/5g.htm" class="" title="https://www.kpn.com/netwerk/5g.htm">5G </a>
    cy.get('a[href*="/5g.htm"]')
      .contains("5G")
      .click();
    cy.findByText(/5G bij KPN zakelijk/i).click();
  });
});
