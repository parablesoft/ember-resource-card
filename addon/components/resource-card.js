import Ember from 'ember';
import layout from '../templates/components/resource-card';

const {set,Component} = Ember;

export default Component.extend({
  layout,
  displayTemplate: "",
  classNames: ["ui","card"],
  actions:{
    changeResource(){
      set(this,"resource",null);
    }
  }

});
