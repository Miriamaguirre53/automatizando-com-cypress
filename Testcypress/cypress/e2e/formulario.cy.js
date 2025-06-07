describe("suit de pruebas", () => {
 it("ingreso al formilario",() => {
    cy.visit("https://the-internet.herokuapp.com/login") 
    cy.get('#username'). should("be.visible")
    cy.get('#username'). type("tomsmith")
    cy.get('#password'). should("be.visible")
    cy.get('#password'). type("SuperSecretPassword!")
    cy.get('.radius'). click()
    cy.get('#flash'). contains("You logged into a secure area!")
    cy.get('.button').click()
    cy.get('h2'). should("be.visible")

 })   




})