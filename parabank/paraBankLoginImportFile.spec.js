import * as testdata from "../../fixtures/testData.json";
const login = testdata.JohnSmith;

beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
  const todaysDate = Cypress.moment().format("YYYY MM DD HH:mm:ss");
  cy.log("now", todaysDate);
});

it("should be possible to login using simply input and name", () => {
  cy.get("input[name=username]").type(login.username);
  cy.get("input[name=password]").type(login.password);
  cy.get(`input[class="button"]`).click();
});
