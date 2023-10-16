// cypress/integration/pokemonList.spec.js

describe('Pokemon List Page', () => {
    it('loads the list of Pokemon', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL if needed
  
      cy.contains('Loading...').should('not.exist'); // Wait for loading to finish
  
      cy.get('.pokemon-list').children().should('have.length.greaterThan', 0);
    });
  
    it('opens the modal when a Pokemon is clicked', () => {
      cy.visit('http://localhost:3000'); // Adjust the URL if needed
  
      cy.contains('Loading...').should('not.exist'); // Wait for loading to finish
  
      cy.get('.pokemon-list').children().first().click(); // Click on the first Pokemon
  
      cy.get('.modal').should('exist');
    });
  });
  