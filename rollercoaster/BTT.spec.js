/// <reference types="Cypress" />

context(
  "Beslistabeltest (Decision table test) : multiple condition coverage",
  () => {
    beforeEach(() => {
      cy.visit(
        "https://robfl4.github.io/ITestMyCase/executeRollercoaster.html"
      );
    });

    it("FTG-1: 1-1-1 (true-true-true)", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("100");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Jullie mogen mee met de rit van jullie leven!"
      );
    });

    it("FTG-2: 1-1-0 (true-true-false)", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("301");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-3: 1-0-1 (true-false-true)", () => {
      cy.get('[data-testid="length"]').type("121");
      cy.get('[data-testid="weight"]').type("99");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-4: 1-0-0 (true-false-false)", () => {
      cy.log(
        "Deze testcase is onmogelijk omdat je niet lichter kan zijn dan 100 kg en"
      );
      cy.log("tegelijkertijd zwaarder bent dan 300kg.");
      cy.log("Kortom de uitkomsten van condities 2 en 3 sluiten elkaar uit!");
    });

    it("FTG-5: 0-1-1 (false-true-true)", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("300");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Voer opnieuw de lengte van de kleinste persoon in!"
      );
    });

    it("FTG-6: 0-1-0 (false-true-false)", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("301");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Voer opnieuw de lengte van de kleinste persoon in!"
      );
      cy.get('[data-testid="length"]').clear().type("120");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-7: 0-0-1 (false-false-true)", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("99");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Voer opnieuw de lengte van de kleinste persoon in!"
      );
      cy.get('[data-testid="length"]').clear().type("120");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-8: 0-0-0 (false-false-false)", () => {
      cy.log(
        "Deze testcase is onmogelijk omdat je niet lichter kan zijn dan 100 kg en"
      );
      cy.log("tegelijkertijd zwaarder bent dan 300kg.");
      cy.log("Kortom de uitkomsten van condities 2 en 3 sluiten elkaar uit!");
    });
  }
);
