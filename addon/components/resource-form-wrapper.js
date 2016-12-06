import Ember from 'ember';
import layout from '../templates/components/resource-form-wrapper';

export default Ember.Component.extend({
  layout,
  actions:{
    cancel(){
      this.attrs.onCancel();
    },
    save(){
      this.attrs.onSave();
    }
  }
});
