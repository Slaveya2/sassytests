/// <reference types="cypress"/>

it (`new web test`, function(){

cy.visit(`https://parabank.parasoft.com/parabank/index.htm`)

cy.get(`#leftPanel`)
cy.get(':nth-child(2) > .input').type(`sassy`)
cy.get(':nth-child(4) > .input').type(`12344`)
cy.get(':nth-child(5) > .button').click()
cy.get('#leftPanel > ul > :nth-child(8) > a').click()


})