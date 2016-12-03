import { Factory,faker } from 'ember-cli-mirage';

export default Factory.extend({
  name(){
    return faker.company.companyName();
  },
  loanAmount(){
    return faker.random.number();
  }
});
