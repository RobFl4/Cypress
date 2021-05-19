/ <reference types="Cypress" / >
  beforeEach("Parabank", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
    // cy.viewport(320, 568);
  });

it("should be possible to do my banking affairs", () => {
  // Log in with username and password
  cy.get('[class="input"]').first().type("john");
  cy.get('[class="input"]').last().type("demo");
  cy.get('[class="button"]').last().click();

  // Open New Account
  cy.get('a[href*="/parabank/openaccount.htm"]').click();
  // Try this
  // Comment line 16 by putting 2 forward slashes '//' in front of the command and the line will be turned green
  // Uncomment line 20 by deleting the forward slashes
  // cy.contains("Open New Account").click();
  // Or try this:
  // cy.findByText("Open New Account").click();

  cy.get("#rightPanel").within(() => {
    cy.get("#type").select("SAVINGS");
    cy.wait(500).get('[class="button"]').contains("Open New Account").click();
    cy.wait(500).get("#newAccountId").click();
  });

  cy.get("#accountType").contains("SAVINGS");
  cy.get("#balance").contains("$100.00");

  // Request Loan
  // cy.findByText("Request Loan").click();
  cy.get('a[href*="/parabank/requestloan.htm"]').click();
  cy.wait(500).get("#amount").type("1000");
  cy.get("#downPayment").type("100");
  cy.wait(500)
    .get('[class="button"]')
    .contains("Apply Now")
    .click({ force: true });
  cy.findByText("Congratulations, your loan has been approved.");

  // Transfer Funds
  cy.contains(/Transfer Funds/i).click();
  cy.get("#amount").type("$100.00");
  cy.get("#toAccountId").contains();

  // Accounts Overview
  cy.contains(/Accounts Overview/i).click();

  // <td ng-if="transaction.type == 'Debit'" class="ng-binding ng-scope">$134.55</td>

  // cy.get ('.navigation-tab > .ng-scope > a > .tab')
  // .invoke('attr','ng-if','activewizmenu = parameters')

  // cy.get('[class*="ng-binding"]')
  //   .invoke("attr", "ng-if")
  //   .should("contain", "Debit");

  cy.contains("13344").click();
  cy.wait(1500)
    .get("tbody>tr")
    .eq(-1)
    .contains(/134.55/i);
  cy.contains(/Accounts Overview/i).click();
  cy.contains("13455").click();
  cy.wait(1500).get("tbody>tr").eq(-1).click();
  cy.wait(500).contains(/134.55/i);
});
