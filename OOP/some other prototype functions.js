function Dog(name) {
    this.name = name;
  }
  
  let beagle = new Dog("Snoopy");
  
  // Only change code below this line
  if(Dog.prototype.isPrototypeOf(beagle)){
    console.log(true)
  }else{
    console.log(false)
  }