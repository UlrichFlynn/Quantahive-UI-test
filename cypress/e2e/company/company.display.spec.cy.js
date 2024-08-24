const constants = require("../../utils/constants");

describe('Display company', () => {

  const username = "admin@quantahive.com";
  const password = "admin";


  beforeEach(() => {
    cy.login(username, password);
  });


  /**
   * Given the system is provisioned
   * And there is a company whose name="RWANDAIR" id=34
   * And creationDate="2024-08-06 14:09:33" updatedDate="2024-08-06 14:09:33"
   * And I am connected with the admin account
   * 
   * When I click on the button "Voir toutes les compagnies"
   * 
   * Then a list of companies is displayed in a table
   * And I verify the first company in the table has name="RWANDAIR"
   * And id=34 creationDate="2024-08-06 14:09:33" updatedDate="2024-08-06 14:09:33"
  */

  xit('Display company list - information - available', () => {
    cy.get(":nth-child(2) > :nth-child(1) > .panel > .panel-content > .btn").click();
    cy.get(':nth-child(1) > .sorting_1 > div').should('contain', '34');
    cy.get('tbody > :nth-child(1) > :nth-child(3) > div').should('contain', 'RWANDAIR');
    cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(4)').should('contain', '2024-08-06 14:09:33');
    cy.get('#dataTable > tbody > :nth-child(1) > :nth-child(5)').should('contain', '2024-08-06 14:09:33');
  });

  /**
   * Given the system is provisioned
   * And there is a company whose name="GAYA AVIATION LLC" id=23
   * And I am connected with the admin account
   * And I am on the company list view
   * 
   * When I click on page 2 at the bottom of the table
   * 
   * Then the second page of the table is dsplayed
   * And I verify the first company in the table has name="GAYA AVIATION LLC" id=23
  */
  it('Display company list - information - second table page', () => {
    cy.get(":nth-child(2) > :nth-child(1) > .panel > .panel-content > .btn").click();
    cy.get('.pagination > :nth-child(3) > a').click();
    cy.get(':nth-child(1) > .sorting_1 > div').should('contain', '23');
    cy.get('tbody > :nth-child(1) > :nth-child(3) > div').should('contain', 'GAYA AVIATION LLC');
  });

})