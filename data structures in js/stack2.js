class Stack {
    constructor(){
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
}

let a = new Stack();
a.push(123);
a.push(3);
a.print();
a.pop();
a.print();
a.push(4)
a.push(5)
a.push(5)
a.print();
a.clear();
a.print();
console.log(a.isEmpty())