beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
  const todaysDate = Cypress.moment().format("YYYY MM DD HH:mm:ss");
  cy.log("now", todaysDate);
});

it("should be possible to login using simply input and name", () => {
  cy.get("input[name=username]").type("john");
  cy.get("input[name=password]").type("demo{enter}");
});

it("should be possible to login using classes and get A DOM element at a specific index in an array of elements", () => {
  cy.log("alternatieve testen zijn:");
  cy.get('[class="input"]').eq(0).type("john");
  cy.get('[class="input"]').eq(1).type("demo");
  cy.get(`input[class="button"]`).click();
  cy.get('a[href*="/parabank/logout.htm"]').click();
});

it("should be possible to login using classes and get the first or last DOM element within a set of DOM elements  ", () => {
  cy.log("alternatieve testen zijn:");
  cy.get('[class="input"]').first().type("john");
  cy.get('[class="input"]').last().type("demo", { sensitive: true });
  cy.get('[class="button"]').eq(-1).click();
});
