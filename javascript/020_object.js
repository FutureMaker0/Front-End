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


