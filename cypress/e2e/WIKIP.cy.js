describe('test wikipedia', () => {
it('FIRST TEST', () => {
cy.visit('https://es.wikipedia.org/wiki/Wikipedia:Portada')
cy.contains('#Bienvenidos_a_Wikipedia\,','Bienvenidos a Wikipedia,')
cy.get('#vector-page-tools-dropdown-checkbox').click().wait(700)// Abre el menú desplegable "Herramientas de página"
cy.contains('Crear un libro').click().wait(900) // Hace clic en la opción "Crear un libro" dentro del menú
cy.get('.oo-ui-buttonWidget > .oo-ui-buttonElement-button').click()// Hace clic en el botón "Comenzar un libro" en la página del creador de libros
cy.get('#p-search > .cdx-button--fake-button').click()// clickear en el campo de búsqueda (hace clic en la lupa)
cy.get('#searchText').type('cristiano ronaldo') // Escribe "cristiano ronaldo" en el campo de búsqueda
cy.get('.oo-ui-actionFieldLayout-button > .oo-ui-widget > .oo-ui-inputWidget-input').click()// Hace clic en el botón de "Buscar" para enviar la búsqueda
cy.get('.mw-search-result-heading').eq(0).click()// Hace clic en el primer resultado de búsqueda pero no se muestra en la prueba porqu aca abre otra ventana y te lleva al articulo.

  })
})