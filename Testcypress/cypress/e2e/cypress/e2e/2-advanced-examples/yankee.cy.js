it("my first test", () => {
cy.visit("https://en.wikipedia.org/")
cy.contains("Welcome to Wikipedia")
cy.get('#p-search > .cdx-button--fake-button').click()
cy.get('#searchform > .cdx-search-input > .cdx-search-input__input-wrapper > .cdx-text-input > .cdx-text-input__input')
   .type("Matosinhos porto{enter}")
})

it("last test", () =>{    
cy.visit("https://en.wikipedia.org/")
cy.get('#ca-nstab-main > a > span')
  .contains('Main')
  .last()
  .click()})

  it.only("asertion", () => {
  cy.visit("http://zero.webappsecurity.com/index.html")
  cy.get('#signin_button').click()
  cy.get("#user_login").type("username")
  cy.get('#user_password').type("password")
  cy.get('#user_remember_me')
   .check()
cy.get('#user_remember_me').should('be.checked')
 cy.get('.btn').click()
cy.get('.offset2 > :nth-child(1)').contains('Cash Accounts')


  })



