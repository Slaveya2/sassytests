it.only(`test`, function () {

    cy.visit('https://sassytest.budibase.app/builder/portal/apps');


    cy.get(':nth-child(1) > .content > .field > .svelte-1xkimai').type(`buticsis123@mail.bg`)

    cy.get(':nth-child(2) > .content > .field > .svelte-1xkimai').type(`Simidareva95`).click()
    cy.get('.spectrum-Button').click()
    cy.get('.app-row-actions > :nth-child(2) > .spectrum-Button').click()
    cy.get('.page > :nth-child(4) > :nth-child(1)').click()
    cy.get('.spectrum-Textfield-input').type(`s`)
    cy.get('.confirm-wrap > .abs-tooltip > .spectrum-Button').click()
    cy.get('#add-column-button > .icon').click()
    cy.get('input[type="text"]').clear();


    //add First name 
    cy.get('.spectrum-Textfield.svelte-wy7fqv').first().type('First Name');
    cy.get('.back-to-apps > .icon')
    cy.get(':nth-child(2) > .spectrum-Tabs-itemLabel')
    cy.get('.back-to-apps > .icon')
    cy.get(':nth-child(2) > .spectrum-Tabs-itemLabel')
    cy.get(':nth-child(2) > .spectrum-Button> .svelte-s9bbw').click({ force: true })
    cy.get('.back-to-apps > .icon').click()



    // add Users 
   // cy.get('"class = spectrum-Icon spectrum-Icon--sizeS svelte-1hchcjl hoverable"]').click()

    
     //cy.get(':nth-child(2) > .spectrum-Tabs-itemLabel').click()
    // cy.get('.spectrum-ButtonGroup > :nth-child(1) > .spectrum-Button').click()
    // cy.get('.spectrum-InputGroup > .spectrum-Textfield > .spectrum-Textfield-input').type(`mishosikam@gmail.com`)



})
