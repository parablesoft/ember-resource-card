import Ember from "ember";
import customerDisplayTemplate from "dummy/templates/resource-cards/customer-card";
import customerEditFormTemplate from "dummy/templates/resource-cards/customer-form";
import customerSearchTemplate from "dummy/templates/resource-cards/customer-search";
import customerNotFoundTemplate from "dummy/templates/resource-cards/customer-not-found";
import customerNewTemplate from "dummy/templates/resource-cards/customer-new";

import dealDisplayTemplate from "dummy/templates/resource-cards/deal-card";
import dealSearchTemplate from "dummy/templates/resource-cards/deal-search";


const {get,set,Controller,computed} = Ember;
const {alias} = computed;
export default Controller.extend({
  customerEditFormTemplate: customerEditFormTemplate,
  customerNotFoundTemplate: customerNotFoundTemplate,
  customerNewTemplate: customerNewTemplate,
  customerSearchTemplate: customerSearchTemplate,
  customerDisplayTemplate: customerDisplayTemplate,
  newCustomer: alias("model.newCustomer"),
  deals: alias("model.deals"),
  customers: alias("model.customers"),
  dealDisplayTemplate: dealDisplayTemplate,
  dealSearchTemplate: dealSearchTemplate,
  deal2: null,

  actions:{
    create(){
      let newCustomer = get(this,"newCustomer");
      return newCustomer.save().then(()=>{
	set(this,"customer2",newCustomer);
	set(this,"newCustomer",this.store.createRecord("customer"));
      });
    },
    update(){
     return get(this,"customer2").save();
    }
  }

  
});
