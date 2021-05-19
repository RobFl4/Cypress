/// <reference types="Cypress" />

context(
  "Procescyclustest (Process cycle test) Paden (Paths) : testmaat-2 (test depth-2)",
  () => {
    beforeEach(() => {
      cy.visit(
        "https://robfl4.github.io/ITestMyCase/executeRollercoaster.html"
      );
    });

    it("FTG-1: 1-2", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("100");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Jullie mogen mee met de rit van jullie leven!"
      );
    });

    it("FTG-2: 1-3-2", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("301");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
      cy.get('[data-testid="weight"]').clear().type("300");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.wait(500)
        .get("#message")
        .contains("Jullie mogen mee met de rit van jullie leven!");
    });

    it("FTG-3: 1-3-3-2", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("99");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Voer opnieuw de lengte van de kleinste persoon in!"
      );
      cy.get('[data-testid="length"]').clear().type("121");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
      cy.get('[data-testid="weight"]').clear().type("299");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.wait(500)
        .get("#message")
        .contains("Jullie mogen mee met de rit van jullie leven!");
    });
  }
);
