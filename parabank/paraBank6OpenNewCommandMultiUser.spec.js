beforeEach("Parabank", () => {
  cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
  // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
  cy.title().should("include", "ParaBank");
});

[
  { customer: "JaneDoe" },
  { customer: "JohnSmith" },
  { customer: "DonaldDuck" },
].forEach(({ customer }) => {
  it(`should be possible to open a new account as ${customer}`, () => {
    // Log in with username and password
    cy.log("customer", customer);
    cy.LoginFromTestData(customer);
    // Open New Account
    cy.openNewAccount();
    cy.accountsOverview();
    cy.requestLoan({ loanamount: "10000", downpayment: "100" });
  });
});
