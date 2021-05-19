beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
});

it("should be possible to open a new account as John Smith", () => {
  // Log in with username and password
  cy.typeLogin({ name: "john", password: "demo{enter}" });
  // Open New Account
  cy.openNewAccount();
  cy.accountsOverview();
});

it("should be possible to open a new account as Jane Doe", () => {
  // Log in with username and password
  cy.typeLogin({ name: "jane", password: "demo{enter}" });
  // Open New Account
  cy.openNewAccount();
  cy.accountsOverview();
});

it("should be possible to open a new account as Donald Duck", () => {
  // Log in with username and password
  cy.typeLogin({ name: "donald", password: "duck{enter}" });
  // Open New Account
  cy.openNewAccount();
  cy.accountsOverview();
});
