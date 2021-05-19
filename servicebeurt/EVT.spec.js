/// <reference types="Cypress" />

context("Make an appointment at the garage", () => {
  beforeEach(() => {
    cy.visit("https://robfl4.github.io/ITestMyCase/executeServicebeurt.html");
    // cy.visit("http://localhost:8080/itestmycase/executeServicebeurt.html");
  });

  it("FTG-1: B1:1-0-0-0, B2: 1-0, B3: 1-0-0-0-0-1, B4: 1-1-1-0", () => {
    // Check Radio Buttons and Check Boxes
    cy.checkRBandCB();
    cy.get('[data-testid="kilometerstand"]').clear().type("30000");
    cy.get("#sterretje").check();
    cy.get('input[value="sterretje"]').should("be.checked");
    cy.get("#links-voor").check();
    cy.wait(100).get('input[value="links-voor"]').should("be.checked");
    cy.get("#koplamp-links").click().should("be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Carglass, ACtronics en Profile Tyrecenter."
    );
  });

  it("FTG-2: B1:0-1-0-0, B2: 0-1, B3: 0-1-0-0-0-1, B4: 1-1-0-1", () => {
    cy.get('[data-testid="kilometerstand"]').clear().type("60000");
    cy.get("#barst").check();
    cy.get('input[value="barst"]').should("be.checked");
    cy.get("#rechts-voor").check().should("be.checked");
    cy.get("#koplamp-rechts").click().should("be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Carglass, ACtronics en Profile Tyrecenter."
    );
  });

  it("FTG-3: B1:0-0-1-0, B2: 0-0, B3: 0-0-1-0-0-1, B4: 0-1-1-0", () => {
    cy.get('[data-testid="kilometerstand"]').clear().type("90000");
    cy.get("#links-achter").check().should("be.checked");
    cy.get("#schakelaar").uncheck().should("not.be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Profile Tyrecenter."
    );
  });

  it("FTG-4: B1:0-0-0-1, B2: 0-0, B3: 0-0-0-1-0-1, B4: 1-0-1-0", () => {
    cy.get('[data-testid="kilometerstand"]').clear().type("120000");
    cy.get("#rechts-achter").check().should("be.checked");
    cy.get("#contact").uncheck().should("not.be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Profile Tyrecenter."
    );
  });

  it("FTG-5: B1:0-0-0-0", () => {
    // Check Radio Buttons and Check Boxes
    cy.checkRBandCB();
    cy.get('[data-testid="kilometerstand"]').clear().type("29999.999");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De auto hoeft niet naar de garage voor een servicebeurt of vul alsnog de juiste kilometerstand in"
    );
  });

  it("FTG-6: B1:0-0-0-1, B2: 0-1, B3: 0-0-0-0-1-1, B4: 1-1-0-0", () => {
    cy.get('[data-testid="kilometerstand"]').clear().type("120000");
    cy.get("#barst").check();
    cy.get('input[value="barst"]').should("be.checked");
    cy.get("#reserve-wiel").check().should("be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Carglass en Profile Tyrecenter."
    );
  });

  it("FTG-7: B1:0-0-1-0, B2: 1-0, B3: 0-0-0-0-0-1, B4: 1-1-0-0", () => {
    cy.get('[data-testid="kilometerstand"]').clear().type("90000");
    cy.get("#sterretje").check();
    cy.get('input[value="sterretje"]').should("be.checked");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains(
      "De afspraak wordt ingepland inclusief een afspraak bij Carglass."
    );
  });

  it("FTG-8: B1:0-1-0-0, B2: 0-0, B3: 0-0-0-0-1-0, B4: 1-1-0-0", () => {
    // Check Radio Buttons and Check Boxes
    cy.checkRBandCB();
    cy.get('[data-testid="kilometerstand"]').clear().type("60000");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Maak afspraak")
      .click();
    cy.get("#message").contains("De afspraak wordt ingepland!");
  });
});
