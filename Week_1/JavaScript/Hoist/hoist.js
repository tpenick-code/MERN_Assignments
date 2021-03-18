// GIVEN
console.log(example);
var example = "I'm the example!";
//AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";


//1
console.log(hello);                                   
var hello = 'world';
//var hello;
//console.log(hello);
//hello="world";

//output: undefined

//2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';4
    console.log(needle);
}
//function test(){
//        var needle = 'magnet';
//        console.log(needle);
//    }
//var needle;
//needle = 'haystack';
//test();

//output: magnet

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

//function print(){
        brendan = 'only okay';
        console.log(brendan);
    }
//var brendan
//brendan = 'super cool';
//console.log(brendan);

//output: only ok

//4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

//function eat(){
        food = 'half-chicken';
        console.log(food);
        var food = 'gone';
    }
//var food
//food = 'chicken';
// console.log(food);
// eat();

//// output: chicken , half-chicken

//5
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);

//var mean;
//mean()
//console.log(food);
//mean = function() {
//        food = "chicken";
//        console.log(food);
//        var food = "fish";
//        console.log(food);
//    }
//console.log(food);

//output: error


//6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//function rewind() {
//        genre = "rock";
//        console.log(genre);
//        var genre = "r&b";
//       console.log(genre);
//    }
// var genre;
// console.log(genre);
// genre = "disco";
// rewind();
// console.log(genre)

//output: error, rock, r&b, disco


//7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    console.log(dojo);
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

//function learn() {
//        console.log(dojo);
//        dojo = "seattle";
//        console.log(dojo);
//        var dojo = "burbank";
//        console.log(dojo);
//    }

// dojo = "san jose";
// console.log(dojo);
// learn();
// console.log(dojo);

//output: san jose, error, seattle, burbank

//8 - Bonus ES6:const
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

//function makeDojo(name, students){
//        const dojo = {};
//        dojo.name = name;
//        dojo.students = students;
//        if(dojo.students > 50){
//            dojo.hiring = true;
//        }
//        else if(dojo.students <= 0){
//            dojo = "closed for now";
//        }
//        return dojo;
//    }