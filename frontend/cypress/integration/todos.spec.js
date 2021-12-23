/// <reference types="cypress" />

describe('todo app', () => {
  beforeEach(() => {
    cy.seedDatabase();
    cy.visit('/');
  });

  it('displays todo items', () => {
    cy.get('.todo-list-item').should('have.length', 2);
    cy.get('.todo-list-item label').first().should('have.text', 'Walk the dog');
    cy.get('.todo-list-item label').last().should('have.text', 'Buy groceries');
  });

  it('can add a new todo item', () => {
    const newItem = 'Feed the cat';
    cy.get('#add-todo-input').type(`${newItem}{enter}`);
    cy.get('.todo-list-item label')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem);
  });

  it('can check an unchecked todo item as done', () => {
    cy.get('input[type=checkbox]:not(:checked)').check().should('be.checked');
  });

  it('can uncheck a checked todo item as not done', () => {
    cy.get('input[type=checkbox]:checked').uncheck().should('not.be.checked');
  });

  it('can not delete an uncompleted todo item', () => {
    cy.get('input[type=checkbox]:not(:checked)')
      .parentsUntil('.todo-list-item')
      .contains('Delete')
      .should('be.disabled');
  });

  it('can delete a completed todo item', () => {
    cy.get('input[type=checkbox]:checked')
      .parentsUntil('.todo-list-item')
      .contains('Delete')
      .click();
    cy.get('.todo-list-item').should('have.length', 1);
  });
});
