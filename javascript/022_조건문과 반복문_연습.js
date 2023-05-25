// 1부터 100까지 더하는 예제
// for (초깃값; 조건; 증감값)

// 1번 풀이
for (let i =0; i<101; ++i){
    s += i
}

// 2번 풀이
let s = 0
let i = 1
while (i<101) {
    s += ++i
}
s

new Array(10)
new Array(10).fill(1)
new Array(10).fill(1)
new Array(10).fill(1).map((_, i) => i)
new Array(10).fill(1).map((_, i) => i+1)

// 3번 풀이
let range = new Array(100).fill(1).map((_, i) => i+1)
let result = 0
for (const i of range){
    result += i
}

// 4번 풀이
new Array(100).fill(1).map(_, i) => i+1).reduce(a, c) => a+c, 0)



// 1부터 100까지 짝수만 더하는 예제
// 1번 풀이
s = 0
for (let i=0; i<101; i++) {
    if (i % 2 == 0){
        s += i
    }
}
s

s = 0
for (let i=0; i<101; i += 2) {
    s += i
}
s







