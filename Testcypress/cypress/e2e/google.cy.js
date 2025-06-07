describe("test suit", () => {  
it("ingresar a Google" ,() => {
cy.visit("https://www.google.com/?hl=es")
cy.get('#W0wltc > .QS5gu').click()
cy.get('.LLD4me'). should("be.visible")
cy.get('#APjFqb').type("HOLA CAROLAA")



})


})
