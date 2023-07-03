/* eslint-disable no-undef */
describe('Feedback Loop form flow', () => {
  beforeEach(() => {
    // eslint-disable-next-line no-undef
    cy.visit('http://localhost:3000');
  });
  it('Should have a form for user login', () => {
    cy.get('form').within(() => {
      cy.get('input[type="Email"]').should('have.value', '')
      cy.get('input[type="Password"]').should('have.value', '')
      cy.get('button').as('Login')
    });
  });
});