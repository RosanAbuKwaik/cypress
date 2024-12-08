class RegisterPage {
  elements = {
    fname: '#customer\\.firstName',
    lname: '#customer\\.lastName',
    address: '#customer\\.address\\.street',
    city: '#customer\\.address\\.city',
    state: '#customer\\.address\\.state',
    zipcode: '#customer\\.address\\.zipCode',
    phone: '#customer\\.phoneNumber',
    ssn: '#customer\\.ssn',
    username: '#customer\\.username',
    password: '#customer\\.password',
    confirm: '#repeatedPassword',
    registerButton: 'input.button[value="Register"]',
  };

  visitRegisterPage() {
    cy.visit('https://parabank.parasoft.com/parabank/register.htm');
  }

  fillRegisterForm(
    fname,
    lname,
    address,
    city,
    state,
    zipcode,
    phone,
    ssn,
    username,
    password,
    confirm
  ) {
    cy.get(this.elements.fname).type(fname);
    cy.get(this.elements.lname).type(lname);
    cy.get(this.elements.address).type(address);
    cy.get(this.elements.city).type(city);
    cy.get(this.elements.state).type(state);
    cy.get(this.elements.zipcode).type(zipcode);
    cy.get(this.elements.phone).type(phone);
    cy.get(this.elements.ssn).type(ssn);
    cy.get(this.elements.username).type(username);
    cy.get(this.elements.password).type(password);
    cy.get(this.elements.confirm).type(confirm);
  }

  
  clickRegisterbtn() {
    cy.get(this.elements.registerButton).click();
  }
}

export default RegisterPage;
