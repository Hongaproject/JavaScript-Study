//객체
const cat = {
    name: '율무',
    age: '2'
};

console.log(cat.name); //율무
console.log(cat.age); //2
console.log(cat); //율무, 2

const dog ={
    name: '누룽지',
    sound: '멍멍!',
    say: function() {
        console.log(this.sound);
    }
}

dog.say();
    //멍멍

//배열
//const array = [1,2,3,4,5];

const objects = [{ name: '고려'}, {name: '은단'}];
console.log(objects); //고려, 은단
console.log(objects[0]); //고려
console.log(objects[1]); //은단

console.log(objects.length); //2