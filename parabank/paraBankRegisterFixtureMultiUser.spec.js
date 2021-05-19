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

[
  { customer: "JaneDoe" },
  // { customer: "JohnSmith" },
  { customer: "DonaldDuck" },
].forEach(({ customer }) => {
  it(`should be possible to register a new customer aka ${customer}`, () => {
    cy.contains(/Register/i).click();
    cy.fixture("../fixtures/testData.json").should((data) => {
      cy.get("#customerForm").within(() => {
        cy.get('[class="input"]').first().type(data[customer].firstName);
        cy.get('[class="input"]').eq(1).type(data[customer].lastName);
        cy.get('[class="input"]').eq(2).type(data[customer].address);
        cy.get('[class="input"]').eq(3).type(data[customer].city);
        cy.get('[class="input"]').eq(4).type(data[customer].state);
        cy.get('[class="input"]').eq(5).type(data[customer].zipCode);
        cy.get('[class="input"]').eq(6).type(data[customer].phone);
        cy.get('[class="input"]').eq(7).type(data[customer].SSN);
        cy.get('[class="input"]').eq(8).type(data[customer].username);
        cy.get('[class="input"]').eq(9).type(data[customer].password);
        cy.get('[class="input"]').eq(-1).type(data[customer].password);
        cy.contains("Register").click();
      });
      cy.wait(500)
        .get('[class="title"]')
        .should("contain", data[customer].username);
    });
  });
});
