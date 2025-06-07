describe("caso de prueba" , () => {
it("validar un ingreso a la pagina", () => {
cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
cy.get('.orangehrm-login-logo > img').should("be.visible")
cy.get('.oxd-button').should("be.visible")
cy.get(".orangehrm-login-branding > img").should("be.visible")
cy.get(".oxd-text--h5"). contains("Login")
cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type("Admin")
cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type("admin123")
cy.get('.oxd-button').click()
cy.get('.oxd-userdropdown-img').should("be.visible")
cy.get('.oxd-userdropdown-tab > .oxd-icon'). should("be.visible")






})









})