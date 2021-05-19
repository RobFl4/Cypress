beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
});

it("will clean my test data", () => {
  cy.cleanDatabase();
});

[{ customer: "JaneDoe" }, { customer: "DonaldDuck" }].forEach(
  ({ customer }) => {
    it(`should be possible to register a new customer aka ${customer}`, () => {
      cy.register(customer);
    });
  }
);
