
Cypress.Commands.add('login', (email, password) => {
    cy.visit('/')
    cy.get("#email").type(email);
    cy.get('#passwordGroup > .controls > .form-control').type(`${password}{enter}`);
    cy.url().should('include', '/admin');
});