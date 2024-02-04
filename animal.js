// This is the class represneting the animal kimgdom
class Animal {
  constructor(name, type, backbone, warmBlooded) {
    this.name = name;
    this.type = type;
    this.backbone = backbone;
    this.warmBlooded = warmBlooded;
  }

  eat() {
    console.log(`${this.name} is eating.`);
  }

  sleep() {
    console.log(`${this.name} is sleeping.`);
  }
}

// ColdBloodedAnimal class inherits from Animal
class ColdBloodedAnimal extends Animal {
  constructor(name, type, backbone) {
    super(name, type, backbone, false); //  false because cold-blooded animals are not warm-blooded
  }

  regulateBodyTemperature() {
    console.log(`${this.name} is regulating its body temperature.`);
  }
}

// WarmBloodedAnimal class inherits from Animal
class WarmBloodedAnimal extends Animal {
  constructor(name, type, backbone) {
    super(name, type, backbone, true); // true because warm-blooded animals are warm-blooded
  }

  maintainConstantTemperature() {
    console.log(`${this.name} is maintaining a constant body temperature.`);
  }
}

function performActivity(animal) {
  animal.eat();
  animal.sleep();

  // Check if the animal is warm-blooded or cold-blooded
  if (animal.warmBlooded) {
    animal.maintainConstantTemperature();
  } else {
    animal.regulateBodyTemperature();
  }
}
