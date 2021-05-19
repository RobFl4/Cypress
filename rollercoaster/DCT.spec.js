/// <reference types="Cypress" />

context(
  "Datacombinatietest (Data combination test) : Equivalentieklassen (Equivalence classes)",
  () => {
    beforeEach(() => {
      cy.visit(
        "https://robfl4.github.io/ITestMyCase/executeRollercoaster.html"
      );
    });

    it("FTG-1: 119/99", () => {
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

    it("FTG-2: 119/100", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("100");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Voer opnieuw de lengte van de kleinste persoon in!"
      );
    });

    it("FTG-3: 119/301", () => {
      cy.get('[data-testid="length"]').type("119");
      cy.get('[data-testid="weight"]').type("301");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.wait(500)
        .get("#message")
        .contains("Voer opnieuw de lengte van de kleinste persoon in!");
      cy.get('[data-testid="length"]').clear().type("121");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.wait(500)
        .get("#message")
        .contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-4: 120/99", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("99");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });

    it("FTG-5: 120/300", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("300");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains(
        "Jullie mogen mee met de rit van jullie leven!"
      );
    });

    it("FTG-6: 120/301", () => {
      cy.get('[data-testid="length"]').type("120");
      cy.get('[data-testid="weight"]').type("301");
      cy.get('[data-testid="check-button"]')
        .should("contain", "Controleer")
        .click();
      cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    });
  }
);
