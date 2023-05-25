// 파이썬과의 차이점
// key값이 자바스크립트에서는 자동 문자열로 변환해준다.
// true, false 값은 앞에 대소문자가 다르다.

let obj = {
    id: 'jackson',
    pw: '1234',
    name: 'kimjaehyeon',
    email: 'abc123@gmail.com',
    active: false
}

obj['id']
obj.id

let a = 10
let b = 10
let c = 10
let e = {a, b, c}

// 유사배열 객체 ==> 배열과 유사하지만 배열은 아니다.
let txt = {
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: 'o'
}

// value의 값으로 문자열 외에 다른 값을 넣었을 경우
let test = {
    one: sum,
    two: console.log,
    three: window.innerWidth,
    four: [10, 20, 30],
    five: "10",
    six: 100,
}
console.log(test)
test.two("호준!!")

//
let user = {
    id: 'licat',
    pw: '1234',
    name: 'leehojun',
    email: 'hojun@gmail.co.kr',
    active: false
}
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
// user.keys 이렇게는 동작하지 않는다.
// why? 여기에 포함시킬 수 없는 결정적인 이유가 있다.
// object를 상속받는 곳이 많다.



