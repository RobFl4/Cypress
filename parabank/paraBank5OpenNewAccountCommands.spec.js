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
  // Accounts Overview
  cy.accountsOverview();
  // Request Loan
  cy.requestLoan({ loanamount: "1000000", downpayment: "100" });
  cy.wait(500)
    .get('[class*="error"]')
    .should(
      "contain",
      "We cannot grant a loan in that amount with your available funds."
    );
  cy.requestLoan({ loanamount: "10000", downpayment: "100" });
});
