/// <reference types="Cypress" />
// De syntactische regels beschrijven feitelijk het waardedomein voor de betreffende invoervelden.
// Als voor het invoerveld een waarde buiten dit domein aangeboden wordt, hoort het systeem op een
// gecontroleerde wijze – meestal met een foutmelding – de verwerking af te breken.
//
// Voor de syntactische test kan bij de detailintake testbasis de volgende checklist worden gehanteerd:
//  •	Zijn er van toepassing zijnde standaards beschreven op systeemniveau?
//  •	Zijn er van toepassing zijnde standaards beschreven op subsysteemniveau?
//  •	Zijn de lay-outs van de schermen beschreven?
// Is hierbij aandacht gegeven aan de volgende aspecten:
//  •	veldlengte van de rubrieken;
//  •	plaats van de rubriek op het scherm;
//  •	onderscheid invoer en uitvoer rubrieken;
//  •	primaire invoercontroles (niet het gevolg van domein definitie);
//  •	foutafhandeling;
//  •	verplichte en niet-verplichte rubrieken;
//  •	mogelijke functietoetsen, helpschermen en selecties.
//  •	Zijn de schermrubrieken c.q. attributen opgenomen in het gegevensmodel?
//  •	Zijn van de gebruikte attributen de definities (numeriek, alfanumeriek, datum) en de domeinen beschreven?
//  •	Zijn de gespecificeerde verplichte en niet-verplichte rubrieken consistent met de optionaliteit uit het gegevensmodel?
//  •	Voldoen de beschreven schermlay-outs aan de standaards?
//  •	Zijn de lay-outs van de overzichten beschreven?
// Is hierbij aandacht gegeven aan de volgende aspecten:
//  •	veldlengte van de rubrieken;
//  •	plaats van de rubriek op het overzicht?
//  •	Zijn de overzichtrubrieken c.q. attributen opgenomen in het gegevensmodel?
//  •	Voldoen de beschreven overzichtlay-outs aan de standaards?

context("Elementaire Vergelijkingentest (EVT) met Beslispunten: MCDC", () => {
  beforeEach(() => {
    cy.visit("https://robfl4.github.io/ITestMyCase/executeRollercoaster.html");
  });

  it("TC-1: vul alfanumerieke tekens in", () => {
    cy.get('[data-testid="length"]').type("donald");
    cy.get('[data-testid="weight"]').type("duck");
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

  it("TC-2: vul alfanumerieke tekens in zoals - of +)", () => {
    cy.get('[data-testid="length"]').type("--");
    cy.get('[data-testid="weight"]').type("++");
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

  it("TC-3: Voer een idioot lang getal in", () => {
    cy.get('[data-testid="length"]').type(
      "121111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
    );
    cy.get('[data-testid="weight"]').type("250");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains(
      "Jullie mogen mee met de rit van jullie leven!"
    );
  });

  it("TC-4: Voer net iets te weinig / voldoende cijfers achter de komma in", () => {
    cy.get('[data-testid="length"]').type("119.99999999999999");
    cy.get('[data-testid="weight"]').type("300.0000000000001");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains(
      "Voer opnieuw de lengte van de kleinste persoon in!"
    );
    cy.get('[data-testid="length"]').clear().type("119.999999999999999");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains("Voer opnieuw het groepsgewicht in!");
    cy.get('[data-testid="weight"]').clear().type("300.00000000000001");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains(
      "Jullie mogen mee met de rit van jullie leven!"
    );
  });

  it("TC-5: gebruik van decimal point en komma", () => {
    cy.get('[data-testid="length"]').type("119,99");
    cy.get('[data-testid="weight"]').type("200.01");
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains(
      "Voer opnieuw de lengte van de kleinste persoon in!"
    );
  });

  it("TC-6: vul een leeg veld in", () => {
    cy.get('[data-testid="length"]');
    cy.get('[data-testid="weight"]');
    cy.get('[data-testid="check-button"]')
      .should("contain", "Controleer")
      .click();
    cy.get("#message").contains(
      "Voer opnieuw de lengte van de kleinste persoon in!"
    );
  });
});
