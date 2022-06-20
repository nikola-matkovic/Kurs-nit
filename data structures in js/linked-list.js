var Node = function(element) {
    this.element = element;
    this.next = null;
  };
  var Kitten = new Node('Kitten');
  var Puppy = new Node('Puppy');
  const Cat = new Node('Cat');
  const Dog = new Node('Dog');
  
  Kitten.next = Puppy;
  Puppy.next = Cat;
  Cat.next = Dog;