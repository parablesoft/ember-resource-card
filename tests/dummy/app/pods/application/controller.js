import Ember from "ember";
import customerDisplayTemplate from "dummy/templates/resource-cards/customer-card";
import customerSearchTemplate from "dummy/templates/resource-cards/customer-search";
import dealDisplayTemplate from "dummy/templates/resource-cards/deal-card";
import dealSearchTemplate from "dummy/templates/resource-cards/deal-search";


const {Controller,computed} = Ember;
const {alias} = computed;
export default Controller.extend({

  deals: alias("model.deals"),
  customers: alias("model.customers"),
  customerSearchTemplate: customerSearchTemplate,
  customerDisplayTemplate: customerDisplayTemplate,
  dealDisplayTemplate: dealDisplayTemplate,
  dealSearchTemplate: dealSearchTemplate,
  deal2: null,


  
});
