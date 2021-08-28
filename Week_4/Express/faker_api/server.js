const { request, response } = require("express");
const express = require("express");
const app = express();
const port = 8000;
const faker = require ("faker");


app.use (express.json());
app.use (express.urlencoded ( {extended: true}));

const createUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    }
}

const createCompany = () => {
    return {
        companyName: faker.company.companyName(),
        department: faker.commerce.department(),
        address: {
            streetAddress: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    }
}

app.get ("/api/users/new", (request, response) => {
    const newUser = createUser();

    console.log("new user:")
    console.log(newUser);
});

app.get("/api/companies/new", (request, response) => {
    const newCompany = createCompany();
  
    console.log("new company:")
    console.log(newCompany);

});