export default function() {


  this.get("deals",function({deals},request){
    let data = deals.all();
    return doSearch(this,data,request);
  });

  this.get("customers",function({customers},request){
    let data = customers.all();
    return doSearch(this,data,request);
  });

  this.patch("/customers/:id");
  this.post("/customers");

  function getFilter(request){
    return request.queryParams["filter[search]"];
  }
  function doSearch(context,collection,request){
    let filter = getFilter(request);
    if(filter===undefined){
      return collection;
    }
    let queried = context.serialize(collection);
    let searchResults = queried.data.filter(function(item){
      return item.attributes.name.startsWith(filter);
    });
    queried.data = searchResults;
    return queried;
  }

}
