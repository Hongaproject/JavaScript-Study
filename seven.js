// 논리 계산법
// const pet = {
//     name: '뚱냥이'
// };

// function nickname(animal){
//     return animal.name;
// }

// const name = nickname(pet);
// console.log(name);

// const pet = {
//     name: '뚱냥이'
// };

// function nickname(animal){
//     if (animal)
//     {
//         return animal.name;
//     }
//     return undefined;
// }

// const name = nickname();
// console.log(name);

const pet = {
    name: '뚱냥이'
};

function nickname(animal){
    return animal && animal.name;
}

const name = nickname();
console.log(name);

const pets = {
    name: ''
  };
  
  function getName(animal) {
    const named = animal && animal.name;
    return named || '이름이 없는 동물입니다.';
  }
  
  const named = getName(pets);
  console.log(name); // 이름이 없는 동물입니다.