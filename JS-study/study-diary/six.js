//삼항연산자 (조건 ? true : false)
const array = [];
let text = '';
if(array.length === 0){
    text = '없습니다.';
} else{
    text = '있습니다.';
}
console.log(text);


let word = array.length === 0 ? '없습니다.' : '있습니다.';
console.log(word);