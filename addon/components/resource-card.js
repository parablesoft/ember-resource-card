import Ember from 'ember';
import layout from '../templates/components/resource-card';

const {get,set,Component} = Ember;

export default Component.extend({
  layout,
  displayTemplate: "",
  classNames: ["ui","card"],
  exitEditing(){
    set(this,"isEditing",false);
  },
  exitAdding(){
    set(this,"isAdding",false);
  },
  actions:{
    addNew(){
      set(this,"isAdding",true);
    },
    edit(){
      set(this,"isEditing",true);
    },
    cancelEdit(){
      get(this,'resource').rollbackAttributes();
      this.exitEditing();
    },
    cancelAdd(){
      this.exitAdding();
    },
    create(){
      let result = this.attrs.onCreate();
      if(result===undefined){
	this.exitAdding();
      }
      else{
	result.then(()=>{
	  this.exitAdding();
	});
      }
    },
    update(){
      let result = this.attrs.onUpdate();
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
