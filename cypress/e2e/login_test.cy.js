describe("login_test", () => {
  it("tests login_test", () => {
    cy.viewport(457, 713);
    cy.visit("http://localhost:8080/");
    cy.get("#username").click();
    cy.get("#username").type("usuario");
    cy.get("#password").type("123456");
    cy.get("form > button").click();
    cy.get("#username").dblclick();
    cy.get("[logout='logout-button']").click();
    cy.location("href").should("eq", "http://localhost:8080/");
  });
});
