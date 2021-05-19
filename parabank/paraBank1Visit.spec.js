describe("My First Test", () => {
  it("Should Open the Browser", () => {
    cy.visit("http://localhost:8080/parabank/index.htm?ConnType=JDBC");
    cy.title().should("include", "ParaBank");
  });
});
