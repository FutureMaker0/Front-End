let m = new Map();

// Map에 값을 넣기
m.set('하나', '1');
m.set(1, '하나');
m.set(true, 1);
m.set(false, 0);

// Map의 값에 접근하기
console.log(m.get('하나'));
console.log(m.get(true));

// Map의 값이 있는지 확인하기
console.log(m.has('하나'));

// Map의 값을 제거하기
console.log(m.delete('하나'));
console.log(m.has('하나'));
console.log(m);

// Map의 크기를 확인하기
console.log(m.size);

// let mm = new Map()
// mm.set('하나', m)
// Map(1) {'하나' => Map(3)}
// mm.set('하나', {'one':1, 'two':2})
// Map(1) {'하나' => {…}}

const data = new Map()
    .set('name', 'hojun')
    .set('age', 10)
    .set('height', 180)

for (const i of data) {
    console.log(i)
}


// python과 다르게
// object가 iterable객체가 아닙니다.
for (i of {'one': 1, 'two':2 }){
    console.log(i)
}

for (i in {'one': 1, 'two':2 }){
    console.log(i)
}

for (i of Object.entries({'one': 1, 'two':2 })){
    console.log(i)
}


