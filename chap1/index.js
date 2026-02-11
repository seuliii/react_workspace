/*
truthy & falsy : 참이나 거짓이 아닌 값도 상황에 따라 참, 거짓으로 평가함
    falsy : 거짓은 아니지만 거짓과 같은 의미로 쓰임
        -undefined, null, 0,-0, Nan, "", 0n
*/
/*
단락평가 : true || false와 같은 비교식은 첫번쨰 피연산자의 값이 true이므로 결과는 true
            false && true의 결과도 첫번쨰 피연산자의 값이 false이므로 결과는 false
*/
//AND 단락 평가
/*
function calcA(){
    console.log('a');
    return false;
}

function calcB(){
    console.log('b');
    return true;
}
console.log(calcA() && calcB);
*/
// function getName(person){
//     if (person !== undefined && person !== null){
//         return person.name;
//     }else{
//         return "매개변수가 객체가 아닙니다."
//     }
// }
// let person = null;
// let name = getName(person);
// console.log(name);
/*
function getName(person){
    return person && person.name;
}
let person = {name : "이정환"};
let name1 = getName(undefined);
let name2 = getName(null);
let name3 = getName(person);

console.log(name1);
console.log(name2);
console.log(name3);
*/

//for...of 반복문
/*let food = ["짜장면","피자","치킨"];
for(let item of food){
    console.log(item);
}
*/

//Object반복문
/*
let person = {
    name:"이정환",
    age : 25,
    location : "경기도"
};
*/
/*
const keyArr = Object.keys(person);
for(let key of keyArr){
    let value = person[key]
    console.log(key, value);
}
*/
/*
for(let key in person){
    const value = person[key]
    console.log(key, value);
}
*/

//구조 분해 할당
// let arr = [1,2,3];
// let [one,two, three]  = arr
// console.log(one,two, three)
// let [one,two]  = arr
// console.log(one,two);

// let arr = [1,2];
// let [one,two, three] = arr;
// console.log(one,two, three);

//객체의 구조 분해 할당
// let person = {
//     name:"이정환",
//     age : 25,
//     location : "서울"
// };

// let {name,age,location} = person;
// console.log(name,age,location)

// function func({name : n, age:a, location:l}){
//     console.log(n,a,l);
// }

// func(person);


//스프레드 연산자 (...) 반복가능한 객체의 값을 개별 요소로 분리
// let arrA = [1,2,3];
// let arrB = [...arrA,4,5,6];
// let arrC = [arrA,4,5,6];
// console.log(arrB);
// console.log(arrC);


//rest매개변수 (...)로 표기하며 스프레드 연산자와는 반대로 개별 요소를 배열로 묶음
// function func(param,...rest){
//     console.log(param)
//     console.log(rest)
// };

// func(1,2,3,4);

/*
 배열과 메서드
*/
//1.요소의 추가 및 삭제 메서드
//push : 배열 맨 끝에요소를 추가하고 새로운 길이를 반환
/*
let food = ["짜장면","피자","치킨"];
const newLength = food.push("탕수육","라자냐");

console.log(food);
console.log(`새로운 배열의 길이 : ${newLength}`);
*/

//pop : 배열의 맨 끝 요소를 제거하고 제거한 요소를 반환
/*
let food = ["짜장면","피자","치킨"];
const removedItem = food.pop();
console.log(removedItem);
console.log(food);
*/

//shift : 맨 앞 요소를 제거하고 제거한 요소를 반환
/*
let food = ["짜장면","피자","치킨"];
const removedItem = food.shift();
console.log(removedItem);
console.log(food);
*/

//unshift : 배열 맨 앞에 요소를 추가하고 새 배열의 길이를 반환
/*
let food = ["짜장면","피자","치킨"];
const newLength = food.unshift("갈비찜");
console.log(food);
console.log(`새로운 배열의 길이 : ${newLength}`);
*/

//slice : 기존 배열에서 특정 범위를 잘라 새로운 배열을 반환 (arr.slice(start,end))
// const arr = [1,2,3];
// const sliced = arr.slice(0,2);

// console.log(arr);
// console.log(sliced);
// const arr = [1,2,3,4,5];

// console.log(arr.slice(-1));
// console.log(arr.slice(-2));
// console.log(arr.slice(-3));
// console.log(arr.slice(-4));
// console.log(arr.slice(-5));

//concat : 두 배열 합치기
/*
let arrA = [1,2];
let arrB = [3,4];
let arrC = arrA.concat(arrB);
console.log(arrC);
*/

//2.순회 메서드 : forEach는 배열의 모든 요소에 순서대로 접근해 특정 동작을 수행하는 메서드
//인수로 함수를 요구하는 메서드(인수로 전달되는 함수를 콜백함수라고 함)
/*
function cb(item,index,array){
}
arr.forEach(cb);
-item : 현재 순회하는 배열 요소
-index : 현재 순회하는 배열 요소의 인덱스
-array : 순회중인 배열
*/
// function cb(item, idx){
//     console.log(`${idx}번째 요소 : ${item}`)
// }

// const arr = [1,2,3];

// arr.forEach(cb);
// const arr = [1,2,3];
// arr.forEach((item,idx) => {
//     console.log(`${idx}번째 요소 : ${item}`)
// });


//3.탐색 메서드 
//특정 조건을 만족하는 요소를 찾아내는 행위
//indexOf : 배열에서 찾으려는 요소의 인덱스를 반환 indexOf(item,fromIndex)
// let arr = [1,3,5,7,9,1];
// console.log(arr.indexOf(7,0));

//fromIndex를 -1로 전달하면 마지막 인덱스부터 탐색하여 가까운 요소를 반환
// console.log(arr.indexOf(1));
// console.log(arr.indexOf(1,-1));

//찾으려는 요소가 없다면 -1을 반환
//indexOf는 ===로 값을 비교하기 때문에 자료형이 같아야함

//includes : 배열에 특정 요소가 있는지 판별 includes(item,fromIndex)
// let arr = [1,3,5,7,9,1];
// console.log(arr.includes(3));
// console.log(arr.includes("생선"));

//findIndex : 찾으려는 요소의 인덱스 번호를 찾아 반환 findIndex(callback(item,index,array))
//indexOf와는 달리 콜백함수를 전달하는데 이 함수를 판별함수라고 함.
//findIndex메서드가 true를 반환하면 탐색을 성공한 것으로 탐색을 멈춤. 이때 인덱스 번호를 반환
// function determine(item, idx, arr){
//     if (item % 2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// }
// let arr = [1,3,5,6,8];
// let index = arr.findIndex(determine);

// console.log(index)

// let index2 = arr.findIndex((item) =>
//     item % 2 === 0 ? true : false
// );

// console.log(index2)

// let arr = [
//     {name : "이종원"},
//     {name : "이정환"},
//     {name : "신다민"},
//     {name : "김효빈"}
// ];

// let index = arr.findIndex((item) => item.name === "이정환");
// console.log(index);

//find : 인수로 판별 함수를 전달하고 이를 만족하는 요소를 찾음
// let arr = [
//     {name : "이종원"},
//     {name : "이정환"},
//     {name : "신다민"},
//     {name : "김효빈"}
// ];

// let elements = arr.find((item) => item.name === "이정환");
// console.log(elements);

//filter : 배열에서 조건을 만족하는 요소만 모아 새로운 배열로 반환하는 메서드
// let arr = [
//     {name : "이종원" , hobby : "축구"},
//     {name : "이정환" , hobby : "영화"},
//     {name : "신다민" , hobby : "축구"},
//     {name : "김효빈" , hobby : "노래"}
// ];

// let filteredArr = arr.filter((item) => item.hobby === "축구");
// console.log(filteredArr);

//4.변형 메서드 : 배열을 변형하거나 요소를 재정렬하는 메서드
//map : 배열 각각의 요소에 대한 함수 호출 결과를 모아 새 배열을 만들어 반환 arr.map(callback(item,index,array))
// let arr = [1,2,3,4];
// let newArr = arr.map((item) => item *3);
// console.log(newArr);

// let arr = [
//     {name : "이종원" , hobby : "축구"},
//     {name : "이정환" , hobby : "영화"},
//     {name : "신다민" , hobby : "축구"},
//     {name : "김효빈" , hobby : "노래"}
// ];

// let newArr = arr.map((item) => item.name);
// console.log(newArr);


//sort : 배열의 요소를 정렬 arr.sort(compare(a,b))
// let arr = ["b","a","c"];
// arr.sort();
// console.log(arr)

//숫자로 이루어진 배열은 비교함수가 필요. 비교함수는 배열 요소 두 개를 인수로 전달하는데 이 함수의 반환값에 따라 정렬방식이 달라짐
//비교함수가 양수를 반환 : a와b중 b의 위치가 a보다 앞이어야 한다
//비교함수가 음수를 반환 : a와b중 a의 위치가 b보다 앞이어야 한다
// function compare(a,b){
//     if (a > b) return 1;
//     else if(a < b) return -1;
//     else return 0;
// }

// let arr = [10,5,3];
// arr.sort(compare);
// console.log(arr);

// let arr = [10,5,3];
// arr.sort((a,b) => {
//     if (a > b) return 1;
//     else if (a < b) return -1;
//     else return 0;
// });
// console.log(arr);

//join : 배열 요소를 모두 연결해 하나의 문자열로 반환
// let arr = ["안녕", "나는" , "이정환"];

// console.log(arr.join());
// console.log(arr.join("-"));
// console.log(arr.join(" "));

//reduce : 배열 요소를 모두 순회하면서 인수로 제공한 함수를 실행하고 단 하나으 ㅣ결과값만 반환하는 메서드
//2개의 인수를 전달 : 콜백함수(리듀서라고 부름), initial(초기값)
//arr.reduce(acc, item,index,array) 
// acc : 누산기라는 뜻으로 이전 함수의 호출 결과를 저장, initial이 acc의 초기값이 됨

// let arr = [1,2,3,4,5];
// let result = arr.reduce((acc,item) => acc + item,0);
// console.log(result)

//비동기
// setTimeout(function(){
//     console.log("1번");
// },3000);

// console.log("2번");

// setTimeout(()=>{
//     console.log("1번")
// }, 3000 );
// console.log("2번");

// function orderCoffee(coffee, time){
//     setTimeout(()=>{
//         console.log(`${coffee}  제조 완료`);
//     }, time);
// };

// orderCoffee("커피", 4000);
// orderCoffee("티", 2000);
// orderCoffee("아이스커피", 3000);

//비동기 반환값
// function double (num, cb){
//     setTimeout(() => {
//         const doubleNum = num * 2;
//         cb(doubleNum);
//     },1000);
// };

// double(10, (res) =>{
//     console.log(res);
// })

// console.log("마지막");

//프로미스 객체를 이용해 비동기 처리하기 : 인수로 실행함수를 전달, 실행함수란 비동기 작업을 수행하는 함수
const promise = new Promise(
    function (resolve,reject){
        setTimeout(() => {
            reject("실패");
        },500);
    }
);

promise.then(function(res){
    console.log(res);
});

promise.catch(function (err) {
    console.log(err);
});
