import RegisterPage from '../pages/RegisterPage';

describe('ParaBank Registration Test', () => {
  const registerPage = new RegisterPage();

  it('Should successfully register a new user', () => {
  registerPage.visitRegisterPage();
    registerPage.fillRegisterForm(
      'Rosan',              
      'AbuKwaik',               
      'Palestine_Gaza',       
      'Palestine',       
      'Gaza',                
      '62704',             
      '5551234567',        
      '123-45-6789',       
      'Rosantest',           
      'password123',       
      'password123'        
    );

    registerPage.clickRegisterbtn();

    cy.contains('Your account was created successfully.').should('be.visible');
  });
});
