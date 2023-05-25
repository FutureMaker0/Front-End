const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = new Array(4, 5, 6);

const arr = [[10, 20], 2, 3, 4, 5];
arr[0]
arr[0][0]
arr.length

arr.pop()
arr.pop(2)

arr.push(100)

const arr4 = [1, 2, 3, 4, 5];
arr4.shift()
arr4.unshift(100)
arr4.unshift(1000, 2000, 3000)

const arr5 = [1, 2, 3, 4, 5]
arr5.splice(1, 0, 100)
arr5

arr5.splice(1, 1, 1000)
arr5

arr5.splice(1, 1, 10000, 20000)
arr5

const arr6 = [10, 20, 30, 40, 50, 60]
arr6.slice(2, 5)

// 사전식 정렬을 한다.
const arr7 = [1, 2, 3, 7, 11, 22, 8, 5]
arr7.sort()

// 오름차순
arr7.sort((a,b) => a-b)

// 내림차순
arr7.sort((a,b) => b-a)

// forEach() - 자주 사용한다.
// 반복만 한다.
// 새로운 arr를 만들고 싶다면 map을 사용하자.
const arr8 = [1, 11, 2, 3, 7, 8, 22, 5]
arr8.forEach((v, i) => {
    console.log(v)
    console.log(i)
})

// map은 아래 형태보다도, 데이터를 뽑아내는 형태로 많이 사용한다.
[1, 2, 3, 4].map(x => x**2)
[{
    name: 'hojun',
    age: 10
}, {
    name: 'gildong',
    age: 20
}].map((v, i, obj) => {
    console.log(v, i, obj)
    return v
})


[[10, 20], [20, 30], [30, 40]].map(v => v)

// 성이 3글자라는 전제를 하고, 앞 3글자만 뽑는다.
['kimjae', 'pakjae', 'sinjae'].map(v => v.slice(0, 3))

// 들어가는 값이 2개
['kimjae', 'pakjae', 'sinjae'].map((v, i) => [v.slice(0, 3), i])


// map은 새로운 array를 만들어낸다.
// python: map(function, iterable)
// javascript: iterable.map(function)


let data = [{
    name: 'lee hojun',
    age: 10
}, {
    name: 'kim junho',
    age: 20
}, {
    name: 'sin sunghun',
    age: 20
}]

// dnjsgsms epdlxj
[[0, 'hojun', 9], [1, 'junho', 19], [2, '', 29]]

// slice
data.map((v,i) => [i, v.name.slice(4, ), v.age-1])
// split - 스플릿이 더 낫다!
data.map((v,i) => [i, v.name.split(' ')[1], v.age-1])


