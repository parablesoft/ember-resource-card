import Ember from "ember";
import customerDisplayTemplate from "dummy/templates/resource-cards/customer-card";
import dealDisplayTemplate from "dummy/templates/resource-cards/deal-card";

//import computed from 'ember-computed-decorators';
//import {  } from 'ember-computed-decorators';
const {Controller} = Ember;
export default Controller.extend({
  customerDisplayTemplate: customerDisplayTemplate,
  dealDisplayTemplate: dealDisplayTemplate,
  customer: Ember.Object.create({
    companyName: "Foo",
    address: "1234 Anywhere St.",
  }),
  deal: Ember.Object.create({
    name: "XYZ Loan",
    address: "412 S. Westshore Blvd",
    loanAmount: 50000,

  }),

  
});
