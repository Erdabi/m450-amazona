describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.get("a[href='/signin']").click()
    cy.get("input#email").type("user@example.com")
    cy.get("input#password").type("1234")
    cy.get("main button[type=submit]").click();
  })
})