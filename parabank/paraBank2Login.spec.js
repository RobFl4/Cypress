describe("My First Test", () => {
  it("Open Browser and log in", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
    cy.get("input[name=username]").type("john");
    cy.get("input[name=password]").type("demo{enter}");
  });
});
