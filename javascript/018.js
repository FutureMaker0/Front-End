function f(x, y){
    return x + y
}

(function() {
    console.log('hello');
});

(x, y) => x + y
// let f2 = (x, y) => x + y
// 파이썬에서는 람다의 위상이, 재사용하지 않는 함수에서 많이 사용하지만,
// 자바스크립트에서는 화살표 함수가 일반함수만큼 자주 사용된다.

// 1. 중괄호가 없고 함수가 return 되는 코드 1줄이면 return 생략한다.
let f2 = (x, y) => x + y

// 2. 중괄호가 생기면 return이 있어야 한다.
let f3 = (x, y) => {
    let z = x + y
    return z
}

// 3. 파라미터가 1개이면 소괄호도 생략할 수 있다.
let f4 = x => x + x

// 반지름이 입력되면 원의 넓이를 구하는 화살표 함수를 만들어라. 가장 단축된 방법
let pie = 3.14
let half = x
let f5 = (half, pie) => {
    let z = pie * (half**2)
    return z
}

// 다음처럼 여러 값이 입력됐을 때, 가장 큰 값과 가장 작은 값, 총합을 출력하는
// 함수를 만들어라.
// 입력: 함수이름(10, 20, 30, 40)
// 출력: [40, 10, 100]

function f6(a, b, c, d){
    max = Math.max(a, b, c, d)
    min = Math.min(a, b, c, d)
    sum = a + b + c + d
    return [max, min, sum]
}

let f7 = (a, b, c, d) => {
    max = Math.max(a, b, c, d)
    min = Math.min(a, b, c, d)
    sum = a + b + c + d
    return [max, min, sum]
}


