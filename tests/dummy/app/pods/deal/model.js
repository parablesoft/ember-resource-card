import DS from "ember-data";

const {Model,attr} = DS;

export default Model.extend({
  name: attr("string"),
  loanAmount: attr("number"),
  address: attr("string"),
  city: attr("string"),
  state: attr("string"),
  zip: attr("string"),
  phone: attr("string"),
  email: attr("string"), 
});
