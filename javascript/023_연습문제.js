// https://codingdojang.com/scode/393?answer_mode=hide

// str(list(range(10001))).count('8')
// 10000까지에서 8의 갯수

// 이 코드는 알고리즘 문제풀이 할 떄만 좋다.
// 1번 풀이
/*
'.'.repeat(99).split('.').map((v, i) => i+1)
.join('')
.split('')
.filter(v => v === '8')
.length

// 2번 풀이
let s = ''
for (let i; i<101; i++) {
    s += i
}
s.split('')
.filter(v => v === '8')
.length

// 3번 풀이
Array(100)
.fill(0)
.map((v, i) => i+1)
.join('')
.split('')
.filter(v => v === '8')
.length
*/

// 엘리베이터 최대 몸무게 500kg입니다.
// 다음 친구들이 엘리베이터를 탔을 때 최대로 탑승할 수 있는 인원수를 구하세요.
let weight = [60, 50, 55, 60, 77, 88, 56, 67, 89, 45, 55, 45]


