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
