/* eslint-disable no-undef */
describe('Error User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  });
  it('Should render an error if user tries to submit without inputs', () => {
    cy.get('form')
    cy.get('button').as('Login').click()
    cy.contains('Please fill out both inputs');
  });
});