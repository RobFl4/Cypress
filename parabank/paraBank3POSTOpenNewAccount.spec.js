describe("Open New Account", () => {
  it("will clean my test data", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    cy.cleanDatabase();
  });

  it("Open Browser and log in", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
    cy.get("input[name=username]").type("john");
    cy.get("input[name=password]").type("demo{enter}");
    cy.log("Login successful");
    // });

    // it("will do API requests", () => {
    cy.request(
      "http://localhost:8080/parabank/services_proxy/bank/customers/12212/accounts"
    ).then((response) => {
      cy.log(response);
      cy.log(response.body);
      cy.log(response.body[0].id);
      // expect(response.body).to.have.property("code", 200);
    });

    cy.request(
      "POST",
      "http://localhost:8080/parabank/services_proxy/bank/createAccount?customerId=12212&newAccountType=1&fromAccountId=13344"
    ).then((response) => {
      cy.log(response);
      // cy.log(response.body);
      // cy.log(response.body[0].id);
      // expect(response.body).to.have.property("code", 200);
    });

    cy.request(
      "http://localhost:8080/parabank/services_proxy/bank/customers/12212/accounts"
    ).then((response) => {
      cy.log(response);
      cy.log(response.body);
      cy.log(response.body[1].id);
      // expect(response.body).to.have.property("code", 200);
    });

    cy.contains("Accounts Overview").click();

    /*
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
  */
  });
});
