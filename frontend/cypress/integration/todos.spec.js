describe('todo app', () => {
  beforeEach(() => {
    cy.seedDatabase();
    cy.visit('/');
  });

  it('displays todos', () => {
    cy.get('.todo-list-item').should('have.length', 2);
  });

  it('can add a new todo', () => {
    const newItem = 'Feed the cat';
    cy.get('#add-todo-input').type(`${newItem}{enter}`);
    cy.get('.todo-list-item label')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem);
  });

  it('can mark a todo as completed', () => {
    cy.get('input[type=checkbox]:not(:checked)').check().should('be.checked');
  });

  it('can delete a completed todo', () => {
    cy.get('input[type=checkbox]:checked')
      .parentsUntil('.todo-list-item')
      .contains('Delete')
      .click();
    cy.get('.todo-list-item').should('have.length', 1);
  });
});
