describe("probando wiki",() => {
it("ingreso",() => {
cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Portada")
cy.url().should("include", "wikipedia")
cy.visit("https://es.wikipedia.org/wiki/Wikipedia:Bienvenidos")
//cy.get('#firstHeading').should("be.visible")
//cy.get('#ca-view > a > span').click()
//cy.get('#Chromatica > a').click()
//cy.get('#p-search > .cdx-button--fake-button > .vector-icon').type("CdelU")
//cy.get('#searchform > .cdx-search-input > .cdx-button').click()
//cy.get(':nth-child(1) > .searchResultImage > .searchResultImage-text > .mw-search-result-heading')
//cy.wait(1500)
//cy.get(".searchmatch:contains('CdelU')").should("exist")  })
cy.get("")


 



})