///<reference types="cypress"/>







it.only(`test`, function () {

    cy.visit('https://sassytest.budibase.app/builder/portal/apps');


    cy.get(':nth-child(1) > .content > .field > .svelte-1xkimai').type(`buticsis123@mail.bg`)

    cy.get(':nth-child(2) > .content > .field > .svelte-1xkimai').type(`Simidareva95`).click()
    cy.get('.spectrum-Button').click()
    cy.get('.left > .svelte-63esek > :nth-child(1)')

    cy.get('.buttons > :nth-child(1) > .spectrum-Button')
    cy.get('.name > [data-testid="typography-heading"]').click()
    cy.get('.hierarchy-items-container.svelte-1x3l5fq > .hierarchy-items-container > .nav-item > .nav-item-content > .text').click({ force: true })
    cy.get('#add-column-button > .icon').click()
    cy.get('input[type="text"]').clear();
    cy.get('.spectrum-Textfield.svelte-wy7fqv').first().type('First Name');


    // add a user
    cy.get('.back-to-apps > .icon')
     cy.get(':nth-child(2) > .spectrum-Tabs-itemLabel')

//      cy.get('.spectrum-Button.spectrum-Button--sizeM.svelte-s9bbw.spectrum-Button--cta.new-styles').click()
//       cy.get('button').as('Save').click()

cy.get(':nth-child(2) > .spectrum-Button> .svelte-s9bbw').click({ force: true })
})






     //cy.contains('Add users').click()
    // cy.get('.spectrum-InputGroup > .spectrum-Textfield > .spectrum-Textfield-input').type('mishoiskam@gmail.com')
    // cy.get('.confirm-wrap > .abs-tooltip > .spectrum-Button').click()






