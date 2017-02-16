import Ember from 'ember';
import layout from '../templates/components/resource-search';
const resources = Ember.A(["Alpha","Butter","Can","Dog"]);
			 
const {Component,set} = Ember;
export default Component.extend({
  layout,
  queryKey: "filter[search]",
  searchDisplayKey: "name",
  searchClass: "",
  placeholder: "Search ...",
  actions:{
    openSearchResult(result){
      set(this,"resource",result);
      if(typeof(this.attrs.onOpenSearchResult)==="function"){
	this.attrs.onOpenSearchResult(result);
      }
    }
  }
});
