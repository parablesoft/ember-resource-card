import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
 name(){return faker.company.companyName();},
 address(){return faker.address.streetAddress();},
 city(){return faker.address.city();},
 state(){return faker.address.stateAbbr();},
 zip(){return faker.address.zipCode();},
 phone(){return faker.phone.phoneNumber();},
 email(){return faker.internet.email();},

});
