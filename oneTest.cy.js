it.only(`test`, function () {

    cy.visit('https://sassytest.budibase.app/builder/portal/apps');


    cy.get(':nth-child(1) > .content > .field > .svelte-1xkimai').type(`buticsis123@mail.bg`)

    cy.get(':nth-child(2) > .content > .field > .svelte-1xkimai').type(`Simidareva95`).click()
    cy.get('.spectrum-Button').click()
    cy.get('.app-row').click()
    cy.get('.page > :nth-child(4) > :nth-child(1)').click()
    cy.get('.spectrum-Textfield-input').type(`sassy`)
    cy.get('.confirm-wrap > .abs-tooltip > .spectrum-Button').click()
    cy.get('.hierarchy-items-container.svelte-1x3l5fq > .hierarchy-items-container > .nav-item > .nav-item-content > .text').click({ force: true })
    cy.get('#add-column-button > .icon').click()
    cy.get('input[type="text"]').clear();
    cy.get('.spectrum-Textfield.svelte-wy7fqv').first().type('First Name');
    cy.get('.back-to-apps > .icon')
    cy.get(':nth-child(2) > .spectrum-Tabs-itemLabel')
    cy.get(':nth-child(2) > .spectrum-Button> .svelte-s9bbw').click({ force: true })
})