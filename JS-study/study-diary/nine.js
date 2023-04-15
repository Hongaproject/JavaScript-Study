//조건문
function pets1(pet1){
    return(pet1 === "고양이" || pet1 === "강아지" || pet1 === "미니피그");
}
console.log(pets1("강아지")); //true
console.log(pets1("악어")); //false


function pets2(pet2){
    const animal = ['고양이', '강아지', '미니피그'];
    return animal.includes(pet2);
}
console.log(pets2("고양이")); //true
console.log(pets2("거북이")); //false


const pets3 = (pet3) => ["고양이", "강아지", "미니피그"].includes(pet3);   
console.log(pets3("고양이")); //true
console.log(pets3("뱀")); //false
