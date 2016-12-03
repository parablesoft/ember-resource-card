import Ember from "ember";

const {RSVP,Route} = Ember;

export default Route.extend({
model(){
  return new RSVP.hash({
    deals: this.store.findAll("deal"),
    customers: this.store.findAll("customer"),
  });
}
});
