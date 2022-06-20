function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    this.isEmpty = function(){
      return collection.length === 0
    }
    this.clear = function(){
      collection.length = 0
    }
    this.peek = function(){
      return collection[collection.length - 1]
    }
    this.push = function(elem){
      return collection.push(elem)
    }
    this.pop = function(){
      return collection.pop()
    }
}