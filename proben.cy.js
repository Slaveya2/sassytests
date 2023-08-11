///<reference types ="cypress" />
 

it.only(`first demo`, function(){

cy.visit(`https://www.saucedemo.com/v1/`)
cy.get('[data-test="username"]').type(`standard_user`)
cy.get('[data-test="password"]').type(`secret_sauce`).click()
cy.get('#login-button').click()
cy.get('#add-to-cart-sauce-labs-backpack').click()
cy.contains('REMOVE').should('be.visible');


});

