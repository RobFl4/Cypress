describe("Open New Account", () => {
  it("Open Browser and log in", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
    cy.get("input[name=username]").type("john");
    cy.get("input[name=password]").type("demo{enter}");
    // Open New Account
    cy.contains("Open New Account").click();
    // Alternative for the command above
    // Try this
    // Comment line starting with "cy.contains" by putting 2 forward slashes '//' in front of the command and the line will be turned green
    // Uncomment the line below by deleting the forward slashes
    // cy.get('a[href*="/parabank/openaccount.htm"]').click();
    cy.get("#type").select("SAVINGS");
    cy.wait(500)
      .get('[class="button"]')
      .eq(1)
      .should("contain", "Open New Account")
      .click();
    cy.get("#newAccountId").click();
    cy.get("#accountType").contains("SAVINGS");
    cy.get("#balance").contains("$100.00");
    cy.get("#availableBalance").contains("$100.00");
    cy.get('[class="ng-binding ng-scope"]').contains("$100.00");
    cy.get('[class*="ng-scope"]').contains(/100/i);
    // Accounts Overview
    // Afboeking
    cy.contains(/Accounts Overview/i).click();
    cy.contains("13344").click();
    cy.get("#accountType").should("contain", "CHECKING");
    cy.wait(1500)
      .get("tbody>tr")
      .eq(-1)
      .contains(/100.00/i);
    // Bijboeking
    cy.contains(/Accounts Overview/i).click();
    cy.contains("13566").click();
    cy.get("#accountType").should("contain", "SAVINGS");
    // Funds Transfer Received
    // F12 >> Copy XPath:     *[@id="transactionTable"]/tbody/tr/td[2]/a
    cy.get("#transactionTable").should("be.visible");
    // F12 >> Copy outerHTML: <a href="transaction.htm?id=14587" class="ng-binding">Funds Transfer Received</a>
    cy.get('a[href*="transaction.htm"]')
      .should("contain", "Funds Transfer Received")
      .click();
    // Alternatief:
    // cy.wait(1500).get("tbody>tr").eq(-1).click();
    cy.contains(/100.00/i);
  });
});
