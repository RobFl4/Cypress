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

it("should be possible to register a new customer", () => {
  cy.contains(/Register/i).click();
  cy.fixture("../fixtures/testData.json").should((data) => {
    const profile = data.JaneDoe;
    cy.get("#customerForm").within(() => {
      cy.get('[class="input"]').first().type(profile.firstName);
      cy.get('[class="input"]').eq(1).type(profile.lastName);
      cy.get('[class="input"]').eq(2).type(profile.address);
      cy.get('[class="input"]').eq(3).type(profile.city);
      cy.get('[class="input"]').eq(4).type(profile.state);
      cy.get('[class="input"]').eq(5).type(profile.zipCode);
      cy.get('[class="input"]').eq(6).type(profile.phone);
      cy.get('[class="input"]').eq(7).type(profile.SSN);
      cy.get('[class="input"]').eq(8).type(profile.username);
      cy.get('[class="input"]').eq(9).type(profile.password);
      cy.get('[class="input"]').last().type(profile.password);
      cy.contains("Register").click();
    });
    cy.wait(500).get('[class="title"]').should("contain", profile.username);
  });
});
