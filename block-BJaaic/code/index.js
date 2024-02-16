//Animal
 // Parent Constructor
 let animalmethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}

//Dog
 let AnimalMethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
   summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

dogMethod = {
   bark:function(){
        return `I am ${this.name} and I can bark 🐶`
    },
   changeName:function(newName){
        this.name = newName;
    },
    changeColor:function(newColor){
        this.color = newColor;
    },
    summary:function(){
        return `I am ${this.name} and I am of ${this.color} color. I can also bark`
    },
};
Object.setPrototypeOf(dogMethod, animalMethod);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
function createDog(name,color){
    let dog = Object.create(dogMethod);
    dog.name = name;
    dog.color = color;
    return dog;
}
/// Cat
let animalMethod = {
    eat:function(){
        return `I live in ${this.location} and I can eat`
    },
    changeLocation: function(newLocation){
        this.location = newLocation;
    },
    summary: function(){
        return `I live in ${this.location} and I have ${this.numberOfLegs} legs`

    },
};

catMethod = {
    meow:function(){
        return `I am ${this.name} and I can do mewo meow 😹`
    },
    changeName:function(newName){
        this.name = newName;
    },
    changeColorOfEyes:function(newColor){
        this.color = newColor;
    },
    summary:function(){
        return `I am ${this.name} and the color of my eyes are ${this.colorOfEyes}. I can also do meow meow`
    },
};
Object.setPrototypeOf(catMethod, animalMethod);

function createAnimal(location, numberOfLegs){
    let animal = Object.create(animalMethod);
    animal.location = location;
    animal.numberOfLegs = numberOfLegs;
    return animal;
}
function createCat(name,colorOfEyes){
    let cat = Object.create(catMethod);
    cat.name = name;
    cat.colorOfEyes = colorOfEyes;
    return cat;
}
