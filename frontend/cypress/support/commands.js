const BACKEND_HOST = Cypress.env('BACKEND_HOST');

Cypress.Commands.add('seedDatabase', () => {
  const log = Cypress.log({
    message: ['🌱 Seeding Database'],
    autoEnd: false,
  });

  cy.request({
    method: 'POST',
    url: `${BACKEND_HOST}/todos/seed/`,
    log: false,
  }).should((res) => {
    expect(res.status).to.eq(201);
  });

  log.end();
});
