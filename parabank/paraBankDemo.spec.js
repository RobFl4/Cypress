/ <reference types="Cypress" / >
  beforeEach("Parabank", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    // cy.visit("http://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
    cy.viewport(1680, 1200);
    // cy.viewport(375, 812); // iPhone X
  });

it("should be possible to do my banking affairs", () => {
  // Log in with username and password
  cy.get("input[name=username]").type("john");
  cy.get("input[name=password]").type("demo{enter}");

  // Open New Account
  cy.get('a[href*="/parabank/openaccount.htm"]').click();
  // Try this
  // Comment line 16 by putting 2 forward slashes '//' in front of the command and the line will be turned green
  // Uncomment line 20 by deleting the forward slashes
  // cy.contains("Open New Account").click(); // Alternative for line 16
  cy.get("#type").select("SAVINGS");
  cy.wait(500).get('[class="button"]').contains("Open New Account").click();
  cy.wait(500).get("#newAccountId").click();

  cy.get("#accountType").contains("SAVINGS");
  cy.get("#balance").contains("$100.00");

  // Request Loan
  cy.contains("Request Loan").click();
  // cy.findByText("Request Loan").click(); // Alternative for above line
  // cy.get('a[href*="/parabank/requestloan.htm"]').click(); // Alternative for above line
  cy.wait(500).get("#amount").type("1000");
  cy.get("#downPayment").type("100");
  cy.get('[class="button"]').contains("Apply Now").click();
  cy.wait(500).contains("Congratulations, your loan has been approved");
  // Je kunt ook slashes gebruiken i.p.v. quotes om het gebruik van hoofd- en kleine letters in je tekst te omzeilen
  cy.wait(500).contains(/congratulations, your loan has been approved/i);
  // Of je kunt m.b.v. slashes ook delen van de tekst gebruiken i.p.v. de hele tekst
  cy.wait(500).contains(/congratulations/i);
  cy.wait(500).contains(/your loan has been approved/i);

  // Transfer Funds
  cy.contains(/Transfer Funds/i).click();
  cy.get("#rightPanel").within(() => {
    cy.wait(500);
    // First enter an invalid amount on purpose

    cy.get("#amount").type("$135.56");
    cy.get("#toAccountId").select("13566");
    cy.wait(500).get('[class="button"]').contains("Transfer").click();
    cy.wait(500).contains(/Please enter a valid amount./i);
    cy.pause();
    // Then clear your input and fill in a valid amount
    cy.get("#amount").clear().type("135.56");
    cy.wait(500).get('[class="button"]').contains("Transfer").click();
  });

  // Accounts Overview
  // Afboeking
  cy.contains(/Accounts Overview/i).click();
  cy.contains("13344").click();
  cy.get("#accountType").should("contain", "CHECKING");
  cy.wait(1500)
    .get("tbody>tr")
    .eq(-1)
    .contains(/135.56/i);
  // Bijboeking
  cy.contains(/Accounts Overview/i).click();
  // cy.contains("13455").click();
  cy.contains("13566").click();
  cy.get("#accountType").should("contain", "SAVINGS");
  cy.wait(1500).get("tbody>tr").eq(-1).click();
  cy.wait(500).contains(/135.56/i);
  // Leenbedrag (al) bijgeschreven?
  cy.contains(/Accounts Overview/i).click();
  // cy.get("#accountTable").last().should("be.visible").click();
  // cy.wait(1500).get("tbody>tr").eq(-2).click("left");
  // cy.pause();
  // cy.wait(1500).get("#accountType").should("contain", "LOAN");
  cy.wait(500).contains(/1000.00/i);
});
