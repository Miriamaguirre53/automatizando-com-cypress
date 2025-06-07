
describe("test suit-casos de prueba" , () => {  //aqui aprendimos a correr pruebas automatizadas
 beforeEach (() => { //beforEach: cuando tengo un codigo que se repite en cada prueba lo pongo dentro del beforEach y no nocesito volver
    cy.visit("http://zero.webappsecurity.com/")  //npm cypress open
 })
 
it("tranferencia bancaria", () => {
   cy.get('.brand'). contains("Zero Bank")
   cy.get('#signin_button').contains("Signin")
   cy.get('#signin_button').click()
   cy.get('#user_login').type("username")
   cy.get('#user_password').type("password")
   cy.get('.btn').click()
   cy.get('#transfer_funds_tab > a').click()
   cy.get('#tf_fromAccountId').select(4)
   cy.get('#tf_toAccountId').select(5)
   cy.get('#tf_amount').type("2500")
   cy.get('#tf_description').type("gracias diosito")
   cy.get('#btn_submit').click()
   cy.get('#btn_submit').click()
   cy.get('.alert').contains("You successfully submitted your transaction")
})

it("validar actualizacion de datos",() => {
    cy.get('#signin_button').click()
    cy.get('#user_login').type("username")
    cy.get('#user_password').type("password")
    cy.get('.btn').click()
    cy.get('#money_map_tab > a').click()

})

it.only("tare del profeen orange HRM", ()=> {
   cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")




})






})