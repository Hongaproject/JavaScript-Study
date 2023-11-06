// 삼항연산자 ( 조건 ? 참 : 거짓)

const text = [];
const text1 = text.length === 0 ? "배열이 비어있습니다." : "안비어 있습니다."

console.log(text1);

// spread 복사를 하여 사용합니다.
const slime = {
    name: '슬라임'
}

const color = {
    ...slime,
    color: '빨간색'
}

const food = {
    ...color,
    food: '고기'
}

console.log(slime);
console.log(color);
console.log(food);

const animals = ['강아지', '고양이', '호랑이'];
const anotherAnimals = [...animals, '독수리'];
console.log(animals);
console.log(anotherAnimals);

// rest
const purpleCuteSlime = {
    name: '슬라임',
    age: '23',
    color: 'red'
  };
  
  const { name, ...rest } = purpleCuteSlime;
  console.log(name);
  console.log(rest);