import Ember from 'ember';
import layout from '../templates/components/resource-card';

const {get,set,Component} = Ember;

export default Component.extend({
  layout,
  displayTemplate: "",
  isChangeAllowed: true,
  isEditAllowed: true,
  classNames: ["ui","card"],
  exitEditing(){
    set(this,"isEditing",false);
  },
  exitAdding(){
    set(this,"isAdding",false);
  },
  actions:{
    openSearchResult(resource){
      this.attrs.onSearchResultSelected(resource);
    },
    addNew(){
      set(this,"isAdding",true);
    },
    edit(){
      set(this,"isEditing",true);
    },
    cancelEdit(){
      this.exitEditing();
    },
    cancelAdd(){
      this.exitAdding();
    },
    create(resource){
      let result = this.attrs.onCreate(resource);
      if(result===undefined){
	this.exitAdding();
      }
      else{
	result.then(()=>{
	  this.exitAdding();
	});
      }
    },
    update(changeset){
      let result = this.attrs.onUpdate(changeset);
      if(result===undefined){
	this.exitEditing();
      }
      else{
	result.then(()=>{
	  this.exitEditing();
	});
      }
    },
    change(){
      set(this,"resource",null);
    }
  }

});
