const BACKEND_URL = Cypress.env('BACKEND_URL');

Cypress.Commands.add('seedDatabase', () => {
  const log = Cypress.log({
    message: ['🌱 Seeding Database'],
    autoEnd: false,
  });

  cy.request({
    method: 'POST',
    url: `${BACKEND_URL}/todos/seed/`,
    log: false,
  }).should(res => {
    expect(res.status).to.eq(201);
  });

  log.end();
});
