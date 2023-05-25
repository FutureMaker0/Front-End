let one = 10
let two = 3

// 일반 산술 연산자
one / two
// 몫 구하기 연산은 없다. 주석이 되버린다.
~~(one / two)


// 비교 연산자 - ===, !== 제외하고는 좌우 부등호는 파이썬과 동일하다
let x = '10'
let y = 10

x == y
x === y // 등호가 3개여야만 type까지 비교를 한다. 특수한 경우가 아니면 3개를 써라


// 논리 연산자(&&, ||, !)
let x2 = true
let y2 = false
// 실무에서 많이 사용하는 것
!!y2
!!x2
!!'hello'

!!NaN // false
!!null //false
!!underfined //false

!![] //true// 이렇게 사용하지 말고
Number.isNaN(())
Number.isNaN([])
// 와 object의 길이를 함께 판단하면 된다.


// javascript에서는 아래와 같은 단락평가를 자주 사용.
null && 'hello'
'world' && 'hello'

// 단락평가는 거의 ||를 사용한다.
let name = ''
name = name || '이름이 입력되지 않았음'

// 보통은 3항 연산자 + 단락평가로 사용
let 로그인여부 = true
로그인페이지 = 로그인여부 && '<h1>환영합니다 고객님</h1>' // 리액트 같은거에서 많이 쓰는 방식
로그인페이지

let pw = ''
pw = pw || 'pw가 입력되지 않았습니다.'


// 3항 연산자, nullish 병합 연산자? 얼마 안된 문법 - 실무자가 모를 수도 있다.
// https://ko.javascript.info/nullish-coalescing-operator
// IE는 지원하지 않는다.

let firstname = null
let lastname = null
let nickname = null

firstname ?? lastname ?? nickname ?? '익명의 사용자'


let a = null
let b = 10
let c = null
a ?? 100
a ?? b ?? c

// nullish 연산자와 단락평가의 차이점
let height = 0
height || 100 //100
height ?? 100 //0

// || : 0, null, undefined, '', NaN
// ?? : null, undefined


/*
단항 연산자
할당 연산자
3항 연산자
*/

let a10 = 10
// 둘 다 1을 증가시키는 것이다.
a10++
++a10
for (let i=0; i<10; ++i){
    console.log(i)
}

// 할당 연산자
a = 10
a += 5
a /= 5


// 3항 연산자
// 조건식? 조건식이 참일 때 실행될 코드: 조건식이 거짓일 때 실행될 코드
let x20 = true ? 100 : 200
let y20 = false ? 100 : 200 //200자리에 구문 하나를 더 넣어보자

let x30 = false ? 100 : 200
let y30 = true ? 10 : 20
// --> let x30 = false ? 100 : (true ? 10 : 20)
// false니까 100이 아닌 뒤에 조건문이 선택, true니까 앞에 10이 선택
