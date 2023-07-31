describe('The Home Page', () => {
	it('successfully loads', () => {
		cy.viewport(1280, 720);

		cy.visit('https://www.google.com/'); // change URL to match your dev URL

		cy.get('textarea[title="Axtar"][type="search"]').type('cypress.io{enter}');

		cy.get('a[href="https://www.cypress.io/"]').should('be.visible');
	});
});
