import * as testdata from "../../fixtures/testData.json";

beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
});

it("will clean my test data", () => {
  cy.contains(/Admin Page/i).click();
  cy.contains(/clean/i).click();
  cy.contains(/Database Cleaned/i);
});

it("should be possible to register as a new customer", () => {
  cy.contains(/Register/i).click();
  const data = testdata.JaneDoe;
  cy.get("#customerForm").within(() => {
    cy.get('[class="input"]').eq(0).type(data.firstName);
    cy.get('[class="input"]').eq(1).type(data.lastName);
    cy.get('[class="input"]').eq(2).type(data.address);
    cy.get('[class="input"]').eq(3).type(data.city);
    cy.get('[class="input"]').eq(4).type(data.state);
    cy.get('[class="input"]').eq(5).type(data.zipCode);
    cy.get('[class="input"]').eq(6).type(data.phone);
    cy.get('[class="input"]').eq(7).type(data.SSN);
    cy.get('[class="input"]').eq(8).type(data.username);
    cy.get('[class="input"]').eq(9).type(data.password);
    cy.get('[class="input"]').eq(10).type(data.password);
    cy.contains("Register").click();
  });
});
